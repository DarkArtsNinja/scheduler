import React from "react";
import classNames from "classnames";
import "components/Button.scss";

// export default function Button(props) {

//    let buttonClass = "button";


//    if (props.confirm) {
//       buttonClass += " button--confirm";
//    } 
   
//    else if (props.danger) {
//       buttonClass += " button--danger";
//    }

//    else if (props.onClick) {

//       return <button onClick= {props.onClick} className={buttonClass}>{props.children}</button>;
//    }

//    else if (props.disabled) {
//       buttonClass += `${props.disabled}`;

//       return <button onClick= {props.onClick} className={buttonClass}>{props.children}</button>;
//    }

   

//    return <button className={buttonClass}>{props.children}</button>;

// }

// export default function Button(props) {
//    let buttonClass = "button"

   
//    if (props.confirm) {
//       buttonClass += " button--confirm";
//    }
   
//    if (props.danger) {
//       buttonClass += " button--danger";
//    }
//    let attributes = classNames(buttonClass , {...props} )
   
//    return (
//      <button

//        attributes

//       //  className={buttonClass}
//       //  onClick={props.onClick}
//       //  disabled={props.disabled}
//      >
//        {props.children}
//      </button>
//    );
//  }

 export default function Button(props) {
   let buttonClass = classNames("button", 
      {"button--confirm": props.confirm, "button--danger": props.danger});

   
   
   return (
     <button


      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
     >
       {props.children}
     </button>
   );
 }
