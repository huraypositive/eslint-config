#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// INIT_CWD: npm/pnpm이 install을 실행한 프로젝트 루트
const projectRoot = process.env.INIT_CWD;

// 패키지 자체 개발 환경이거나 CI 환경(비대화형)이면 실행하지 않음
if (!projectRoot || projectRoot === __dirname || !process.stdin.isTTY) {
  process.exit(0);
}

const vscodeDir = path.join(projectRoot, '.vscode');
const settingsPath = path.join(vscodeDir, 'settings.json');
const extensionsPath = path.join(vscodeDir, 'extensions.json');

const SETTINGS = {
  'editor.formatOnSave': false,
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': 'explicit',
  },
};

const EXTENSIONS = {
  recommendations: [
    'dbaeumer.vscode-eslint',
    'streetsidesoftware.code-spell-checker',
  ],
  unwantedRecommendations: [],
};

function createFile(filePath, content) {
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
  console.log(`[huray] 설정 파일 생성: ${path.relative(projectRoot, filePath)}`);
}

function mergeSettings(filePath) {
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = { ...existing, ...SETTINGS };
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`[huray] 설정 파일 병합: ${path.relative(projectRoot, filePath)}`);
}

function mergeExtensions(filePath) {
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const recommendations = Array.from(
    new Set([...(existing.recommendations || []), ...EXTENSIONS.recommendations])
  );
  const unwantedRecommendations = Array.from(
    new Set([...(existing.unwantedRecommendations || []), ...EXTENSIONS.unwantedRecommendations])
  );
  const merged = { ...existing, recommendations, unwantedRecommendations };
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`[huray] 설정 파일 병합: ${path.relative(projectRoot, filePath)}`);
}

function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase() === 'y');
    });
  });
}

async function run() {
  try {
    const settingsExists = fs.existsSync(settingsPath);
    const extensionsExists = fs.existsSync(extensionsPath);

    // 둘 다 없으면 바로 생성
    if (!settingsExists && !extensionsExists) {
      createFile(settingsPath, SETTINGS);
      createFile(extensionsPath, EXTENSIONS);
      return;
    }

    // 존재하는 파일이 있으면 병합 여부 질문
    console.log('\n[huray] 이미 존재하는 .vscode 파일이 있습니다.');
    if (settingsExists) console.log('  - .vscode/settings.json');
    if (extensionsExists) console.log('  - .vscode/extensions.json');

    const shouldMerge = await ask('[huray] huray 설정을 병합할까요? (y/N) ');

    if (!shouldMerge) {
      console.log('[huray] 건너뜀');
      return;
    }

    if (settingsExists) {
      mergeSettings(settingsPath);
    } else {
      createFile(settingsPath, SETTINGS);
    }

    if (extensionsExists) {
      mergeExtensions(extensionsPath);
    } else {
      createFile(extensionsPath, EXTENSIONS);
    }
  } catch (err) {
    console.warn('[huray] .vscode 파일 처리 실패:', err.message);
  }
}

run();
