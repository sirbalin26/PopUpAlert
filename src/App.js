import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3 className="title">PopUpAlert</h3>
      <span className="step-1">Activitate</span>
      <br />
      <select className="step-1-option">
        <option>Selectare</option>
        <option>Plimbare</option>
        <option>Sport</option>
        <option>Somn</option>
      </select>
      <br />
      <span className="step-1">Ora</span>
      <br />
      <select className="step-1-option">
        <option>Selectare</option>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
      </select>
      <br />
      <button className="btn">Adauga</button>
    </div>
  );
}
