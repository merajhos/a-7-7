import React from "react";
const StartsUp = ({ inProgressCount, resolvedCount }) => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 gap-8 my-5 h-52">
        <div className="bg-[#632EE3] bg-cover rounded-lg text-white items-center p-7 flex justify-center flex-col "
>
          <h2 className="text-xl  font-bold">In-Progress</h2>
          <p className="text-4xl font-bold">{inProgressCount}</p>
        </div>
        <div className="bg-[#54CF68] bg-cover rounded-lg text-white items-center p-7 flex justify-center flex-col">
          <h2 className="text-xl  font-bold">Resolved</h2>
          <p className="text-4xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default StartsUp;
