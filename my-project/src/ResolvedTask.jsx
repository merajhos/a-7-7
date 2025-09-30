import React from "react";

const ResolvedTask = ({ resolvedTickets }) => {
  return (
    <div className="container mx-auto  ">
      <h3 className="text-xl font-bold mb-4">Resolved Tasks</h3>
      {resolvedTickets.length === 0 ? (
        <p className="text-gray-500  mt-10">No tasks in Resolved.</p>
      ) : (<div className="flex flex-col gap-4">
          {resolvedTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white p-4 rounded-lg  items-center justify-between" >
              <div>
                <h4 className="font-semibold">{ticket.title}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedTask;
