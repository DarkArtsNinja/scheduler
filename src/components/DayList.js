import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const { days } = props;


  const dayListItems = days.map(dayItem => {
    return (
      <DayListItem
        key={dayItem.id}
        name={dayItem.name}
        spots={dayItem.spots}
        selected={dayItem.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return (
    <ul>
      {dayListItems}
    </ul>
  );
}

export default DayList;