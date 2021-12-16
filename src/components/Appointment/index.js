import React from "react";
import "./styles.scss"
import Header from "components/Appointment/Header";
import Show from "./Show";
import Empty from "./Empty";


const Appointment = (props) => {



  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? 
      <Show
					student={props.interview.student} interviewer={props.interview.interviewer} />
					: <Empty />}

      
    </article>
  );
}

export default Appointment;