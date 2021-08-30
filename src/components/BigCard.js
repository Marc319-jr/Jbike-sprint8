import React , { Component } from 'react';
import PropTypes  from 'prop-types';

class BigCard extends Component {



    constructor(){
        super();

        this.state = {
            value : ""
        }
    }

    incrementar(){
        this.setState({
            value: this.state.value +1
        })
    }

    decrementar(){
        this.setState({
            value: this.state.value -1
        })
    }


    componentDidMount()
    {
        console.log("Me monte");
        fetch("http://localhost:3003/users")
        .then(response => {
            response.json();
        })
        .then(data => {
            let totalusers = data.meta.count
        })
        .catch(e => {
            console.log("hay un error");
            console.log(e)
        })
    }

    componentDidUpdate()
    {
        console.log("Meactualize");
    }





    render ()
    {
        return(
            <React.Fragment>
            <div className="col-md-5 mb-2 bigcard">
                <div className="card border-left-white shadow h-100 py-2">
                    <div className="card-body">
                        <div className = "bcTitle">
                            <button onClick = {() => this.incrementar()}>+</button>
                            <h3>Contador: {this.state.value}</h3>
                            <button onClick = {() => this.decrementar()}>-</button>

                        </div>
                        
                        <div className = "bcImg">
                            <img alt = "imagen"></img>
                        </div>

                        <div className = "bcDesc">
                            <p>desc1</p>
                            <p>desc2</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}


export default BigCard