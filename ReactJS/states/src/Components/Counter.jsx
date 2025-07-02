import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-slate-800 p-10 rounded-lg shadow-lg flex flex-col gap-5 max-w-2xl mx-auto text-white text-center">
      <h1 className="text-3xl">Count: {count}</h1>
      <div className="flex gap-5">
        <button
          className="px-10 py-2 rounded border-none cursor-pointer bg-green-500"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-10 py-2 rounded border-none cursor-pointer bg-green-500"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-10 py-2 rounded border-none cursor-pointer bg-green-500"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
