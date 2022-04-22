import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.

    const total = inv.books + inv.notebooks + inv.pens;

    const handleChange = (value, item)=> {
      if(item == "books"){
        if(inv.books <= 0 && value === -1){
          return;
        }
        else{
          setInv(prevState => {
            return { ...prevState, books: prevState.books + value }
          });
        }
      }
      else if(item == "notebooks"){
        if(inv.notebooks <= 0 && value === -1){
          return;
        }
        else{
          setInv(prevState => {
            return { ...prevState, notebooks: prevState.notebooks + value }
          });
        }
      }
      else if(item == "pens"){
        if(inv.pens <= 0 && value === -1){
          return;
        }
        else{
          setInv(prevState => {
            return { ...prevState, pens: prevState.pens + value }
          });
        }
      }
    };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button 
        onClick={() => {
          handleChange(1, "books")
        }}
        className="circlularButton">+</button>
        <button 
        onClick={() => {
          handleChange(-1, "books")
        }}
        className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button 
        onClick={() => {
          handleChange(1, "notebooks")
        }}
        className="circlularButton">+</button>
        <button 
        onClick={() => {
          handleChange(-1, "notebooks")
        }}
        className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button 
        onClick={() => {
          handleChange(1, "pens")
        }}
        className="circlularButton">+</button>
        <button 
        onClick={() => {
          handleChange(-1, "pens")
        }}
        className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};