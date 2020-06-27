import React from 'react';
import './App.css';
import FuncCard from "./component/FuncCard";
import ClassCard from './component/ClassCard';

function App() {

  let variable = "Online class";

  let employees = [
    {
      id : 1,
      name : 'kumar',
      age : 30,
      designation : 'Software Developer'
      
    },
    {
      id : 2,
      name : 'Bikash',
      age : 45,
      designation : 'Computer Engineer'
    }
  ];

  return (
    <div className="App">
      <FuncCard info = {variable} employee = {employees[0]}/>
      <ClassCard info = {variable} employee = {employees [1]}/>
    </div>
  )
}

export default App;
