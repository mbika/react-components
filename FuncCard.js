import React from 'react';
import './FuncCard.css';

// shortcut to comment code in Visual
// comment : Ctrl+K+C
// Uncomment :Ctrl+k+U 





let FuncCard = (props) => {
    // let styles = {
    //     ccolor: 'red',
    //     background : 'blue'
    // };


    //lets learn about React Expression.

    //let variable = "Functional Component";
    console.log(props);
    //let{id,name, age, description} = this.props.employee;
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <h3>
                        {props.info}
                    </h3>
                    <ul>
                        <li>ID : {props.employee.id}</li>
                        <li>Name : {props.employee.name}</li>
                        <li>Age : {props.employee.age}</li>
                        <li>Designation : {props.employee.designation}</li>
                    </ul>
                    <p>{new Date().toDateString()}</p>
                    <p>{new Date().toLocaleTimeString()}</p>
                    
                </div>
            </div>
        </div>
    );
};

//lets understand how to pass data from parent component to child component
//sometime we have requirement,we have to send data from app.js to child component.
//To do this we have to use the component called props.

//props is used to send data from parent component to chile component and vice versa.

//Access the componet in Functional component
//Function => props.name


//Either we can use this concept <li>ID : {props.employee.id}</li>
//or
//we can use javascript destructuring concept
//let{id,name, age, description} = this.props.employee;

//or simple we can use below concept.Both are fine.[Destructuring is good if we use]

//<li>ID : {props.employee.id}</li>
//<li>Name : {props.employee.name}</li>
//<li>Age : {props.employee.age}</li>
//<li>Designation : {props.employee.designation}</li>

export default FuncCard;