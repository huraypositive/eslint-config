#!/bin/bash
set -e

pnpm version

# 버전이 변경된 패키지 수집
CHANGED_PACKAGES=""
for pkg in packages/core packages/next packages/react; do
  if git diff --name-only | grep -q "$pkg/package.json"; then
    NAME=$(node -p "require('./$pkg/package.json').name")
    VERSION=$(node -p "require('./$pkg/package.json').version")
    if [ -n "$CHANGED_PACKAGES" ]; then
      CHANGED_PACKAGES="$CHANGED_PACKAGES, "
    fi
    CHANGED_PACKAGES="$CHANGED_PACKAGES$NAME@$VERSION"
  fi
done

git add -A
git commit -m "[배포] $CHANGED_PACKAGES"
git push

pnpm changeset publish --git-tag
git push upstream --follow-tags
