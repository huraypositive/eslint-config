/**
 * ❌ TestComponent — 의도적인 규칙 위반 예시 (@huray/eslint-config-react)
 *
 * VS Code에서 열면 빨간/노란 밑줄로 위반 위치를 확인할 수 있습니다.
 * pnpm check 실행 시 아래 위반 항목들이 터미널에 출력됩니다.
 */

import { useState } from 'react';

const name = 'Huray';

// ❌ prefer-template
const greeting = 'Hello, ' + name + '!';

// ❌ no-useless-concat
const appName = 'Hu' + 'ray';

// ❌ object-shorthand
const handlers = {
  increment: function (prev) {
    return prev + 1;
  },
};

function TestComponent({ count = 0 }) {
  const [localCount, setLocalCount] = useState(count);

  return (
    <div>
      <p>{greeting}</p>
      <p>{appName}</p>
      {/* ❌ react/self-closing-comp */}
      <hr></hr>
      <span></span>
      <button type="button" onClick={() => setLocalCount(handlers.increment)}>
        Count: {localCount}
      </button>
    </div>
  );
}

export default TestComponent;
