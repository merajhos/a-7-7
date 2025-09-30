import React from "react";

const CustomerTickets = ({ tickets, onCardClick }) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
          onClick={() => onCardClick(ticket.id)}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-800">{ticket.title}</h3>

            <span className="text-xs font-semibold px-5 py-1 rounded-full bg-green-300 mx-2 flex gap-1 items-center">
              <span className="w-3 h-3 bg-green-600 rounded-full"> </span>
             {ticket?.status?.label || ticket?.status?.lavel} 
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>

          <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 gap-2">
            <span>{ticket.id}</span>
            <span className="uppercase text-[#F83044]">{ticket.priority.label1}</span>
            
            <span className="uppercase ">{ticket.assignee}</span>

            <span>{ticket.date}</span>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default CustomerTickets;