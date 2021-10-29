import React from 'react';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: undefined,
            missing: undefined
        }
        this.returnJsonArea = this.returnJsonArea.bind(this);
    }
    storeJson(){
        
    }
    returnJsonArea(){
        return(
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
    displayLogic(){
        if(this.state.available === undefined || this.state.missing === undefined){
            return this.returnJsonArea;
        } else{
            
        }
    }
    render(){
        return(
            <div className='container-fluid bg-dark d-flex justify-content-center align-items-center h-100'>
                <div className='bg-dark row w-100 h-100'>
                    {this.displayLogic()}
                </div>
            </div>
        )
    }
}