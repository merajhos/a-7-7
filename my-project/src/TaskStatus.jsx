

import React from 'react';

const TaskStatus = ({ inProgressTickets, onComplete }) => {
  return (
    <div className="container mx-auto  ">
      <h3 className="text-xl font-bold mb-4"></h3>
      {inProgressTickets.length === 0 ? (
        <p className="text-gray-500 mb-10">No tasks in progress.</p>
      ) : (
        <div className="flex flex-col gap-4">{inProgressTickets.map((ticket) => ( <div key={ticket.id} className="bg-white p-4 rounded-lg  items-center justify-between">
            <div>
              <h4 className="font-semibold">{ticket.title}</h4>
            </div>
              <button
                className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-full text-sm transition-colors duration-200"
                onClick={() => onComplete(ticket.id)}
              >Complete</button>
            </div>
          ))}
        </div>
      )}
    </div>




  );
};

export default TaskStatus;