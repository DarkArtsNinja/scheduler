import React from "react";
import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {"day-list__item--selected": props.selected}, {'day-list__item--full': props.spots === 0}  )
  const {name, setDay} = props;


  const formatSpots = () => {
    if (props.spots === 1) {
      return '1 spot remaining';
    }

    else if (!props.spots) {
      return 'no spots remaining';
    }

    return `${props.spots} spots remaining`;
  }

  return (
    <li className={dayClass} onClick={() => setDay(name)}  >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()} </h3>
    </li>
  );
}

