/**
 * ❌ TestComponent — 의도적인 규칙 위반 예시 (@huray/eslint-config-next)
 */

import { useState } from 'react';
import path from 'path'; // ❌ import/order: builtin(path)은 external(react) 앞에 와야 합니다

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
      <p>{path.sep}</p>

      {/* ❌ @next/next/no-img-element: <img> 대신 next/image의 <Image> 를 사용해야 합니다 */}
      <img src="/logo.png" alt="logo" />

      {/* ❌ prettier/prettier (tailwindcss): Tailwind 클래스 순서가 올바르지 않습니다
            올바른 순서: flex → p-4 → text-red-500 (layout → spacing → typography) */}
      <div className="text-red-500 p-4 flex">Tailwind class order violation</div>
    </div>
  );
}

export default TestComponent;
