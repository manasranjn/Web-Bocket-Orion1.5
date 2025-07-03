import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(name, email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        // onSubmit={handleSubmit}
        className="max-w-xl bg-slate-800 p-10 rounded-lg flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full bg-white px-4 py-2 rounded"
          ref={nameRef}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white px-4 py-2 rounded"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full bg-white px-4 py-2 rounded"
          ref={passwordRef}
        />
        <button
          className="px-10 py-2 bg-green-500 rounded text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uncontrolled;
