import React, { useState, useEffect } from "react";

const Albums = () => {
  const [allData, setAllData] = useState([]);
  const getAllData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setAllData(data);
    console.log(data);
  };
  //   getAllData();
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="grid grid-cols-5 gap-10 p-10">
      {allData.map((item, index) => (
        <div className="bg-slate-700 p-6 rounded-lg text-white" key={index}>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Albums;
