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
        <option>Studiat</option>
        <option>Relaxare</option>
        <option>Lectura</option>
        <option>Evenimente</option>
        <option>Drumetie</option>
      </select>
      <input
        className="step-1-option"
        type="text"
        name="add"
        value=""
        placeholder="Adauga"/>
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
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
        <option>23:00</option>
        <option>24:00</option>
      </select>
      <input
        className="step-1-option"
        type="text"
        name="add"
        value=""
        placeholder="Adauga"/>
      <br />
      <button className="btn" onClick="PressBtn()">
        Adauga
      </button>
    </div>
  );
}