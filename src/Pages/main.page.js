import React from 'react';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: '',
            missing: ''
        }
    }
    render(){
        return(
            <div className='container-fluid bg-dark d-flex justify-content-center align-items-center'>
                <div className='bg-dark row w-100 h-100'>
                    <h1 className='w-50 m-auto h-50 bg-light'>test</h1>
                </div>
            </div>
        )
    }
}