import React from 'react';


class ClassCard extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3>{this.props.info}</h3>
                    {/* //These are called React expression  */}
                        <p>{new Date().toDateString()}</p>
                        <p>{new Date().toLocaleTimeString()}</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
            </div>
        );
    };
};


//we can access the props in class component by using this keyword.
//Class Component => this.props.name
export default ClassCard;