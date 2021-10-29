import React from 'react';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: undefined,
            missing: undefined,
            json: undefined,
            waiting: 'no'
        }
        this.returnJsonArea = this.returnJsonArea.bind(this);
    }
    onChange(text) {
        //This function will take the text area text and store it in state
        const json = text.target.value;
        this.setState({ json });
    }
    parseAndStore(){
        //this function will parse and store the json that was entered into the field
        this.setState({waiting: 'yes'});
        const parsedJSON = JSON.parse(this.state.json);
        if(!parsedJSON.available){
            this.setState({waiting:'no'})
            return Window.alert('Please enter valid JSON file')
        }
        if(!parsedJSON.missing){
            this.setState({waiting:'no'})
            return Window.alert('Please enter valid JSON file')
        }
        const available = parsedJSON.available;
        const missing = parsedJSON.missing;

        this.setState({available,missing,waiting:'no'});
      
    }
    returnJsonArea() {
        //This function will return the initial text area plus button that will be displayed
        return (
            <div className='col w-50 h-50 m-auto bg-light'>
                <form>
                    <div class="form-group">
                        <label for="json">Please Enter Json Below</label>
                        <textarea class="form-control" id="json" rows="10" onChange={this.onChange}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
    displayLogic() {
        //this function will decide what to render based on what is stored in state

        if(this.state.waiting === 'yes') {
            return <h1>...parsing</h1>
        }

        if (this.state.available === undefined || this.state.missing === undefined) {
            return this.returnJsonArea();
        } else {
            <div>
                <h1>Available: {this.state.available}</h1>
                <h1>Missing: {this.state.missing}</h1>
            </div>
        }
    }
    render() {
        return (
            <div className='container-fluid bg-dark d-flex justify-content-center align-items-center h-100'>
                <div className='bg-dark row w-100 h-100'>
                    {this.displayLogic()}
                </div>
            </div>
        )
    }
}