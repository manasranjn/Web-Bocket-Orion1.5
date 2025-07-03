import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password, phone);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="max-w-xl bg-slate-800 p-10 rounded-lg flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full bg-white px-4 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full bg-white px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone"
          className="w-full bg-white px-4 py-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

export default Controlled;
