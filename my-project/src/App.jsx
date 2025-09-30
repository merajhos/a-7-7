import "./App.css";
import Navbar from "./component/Navbar";
import React, { useState, useEffect, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import CustomerTicket from "./component/CustomerTicket";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    fetch("./tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);
  const handleTicketClick = (ticketId) => {
    const isAlreadyInProgress = inProgressTickets.some(
      (ticket) => ticket.id === ticketId
    );
    if (isAlreadyInProgress) {
      toast.warn("This ticket is already in progress!");
      return;
    }
    const clickedTicket = tickets.find((ticket) => ticket.id === ticketId);
    if (clickedTicket) {
      setInProgressTickets([...inProgressTickets, clickedTicket]);
      toast.info(`${clickedTicket.id} added to In Progress!`);
    }
  };
  const handleCompleteTask = (ticketId) => {
    const completedTicket = inProgressTickets.find(
      (ticket) => ticket.id === ticketId
    );
    if (completedTicket) {
      setInProgressTickets(
        inProgressTickets.filter((ticket) => ticket.id !== ticketId)
      );   
      setResolvedTickets([...resolvedTickets, completedTicket, ]);

      setTickets(tickets.filter((ticket) => ticket.id !== ticketId));


      toast.success(`${completedTicket.id} has been resolved!`);
    }
   
  };
  return (
    <>
    <Suspense fallback= {<h2 className="flex mx-auto "></h2>}>

    
       <Navbar Navbar={Navbar}></Navbar>
      <div className="container mx-auto px-10 md:px-0">
      
        <Banner
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        />
        <div className="flex flex-col md:flex-row mt-38 md:mt-8 gap-8">
         
          <div className="md:w-8/12">
          
            <div className="container mx-auto">
             
              <h2 className=" text-2xl font-bold mb-4">Customer Tickets</h2>
            </div>
            <CustomerTicket
              tickets={tickets}
              onCardClick={handleTicketClick}
            />
      
          </div>
    
          <div className="md:w-4/12">
            <h2 className="text-2xl font-bold mb-4 ">Task Status</h2>
      
            <TaskStatus
              inProgressTickets={inProgressTickets}
              onComplete={handleCompleteTask}
            />
            <ResolvedTask resolvedTickets = {resolvedTickets}></ResolvedTask>
           
          </div>
    
        </div>
       <ToastContainer position="top-right" autoClose={3000} />
      </div>
      
      <div className="mt-10">
       <Footer></Footer>
      </div>
      </Suspense>
    </>
  );
}

export default App;
