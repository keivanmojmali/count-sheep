import React from 'react';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: undefined,
            missing: undefined,
            json: '',
            waiting: 'no'
        }
        this.returnJsonArea = this.returnJsonArea.bind(this);
        this.onChange = this.onChange.bind(this);
        this.parseAndStore = this.parseAndStore.bind(this);
        this.displayLogic = this.displayLogic.bind(this)
    }
    onChange(text) {
        //This function will take the text area text and store it in state
        const json = text.target.value;
        this.setState({ json });
        
    }
    parseAndStore(event){
        event.preventDefault();
        //this function will parse and store the json that was entered into the field

        //below will stringify the input
        const jsonStr = JSON.stringify(this.state.json) 

        //sets state of waiting to yes so we can show the parsin screen
        this.setState({waiting: 'yes'});

        //try catch block to make sure that the input is actually json
        //if not - it will clear state and alert user to retry
        //   if {  
        //     const testJSON = JSON.parse(jsonStr);  
        //   } catch (e) {  
        //     this.setState({waiting:'no',json:''})
        //      window.alert('Please enter valid JSON file')
        //   }

          if(!JSON.parse(jsonStr)){
            this.setState({waiting:'no',json:''})
            window.alert('Please enter valid JSON file');
            return;
          }

        const parsedJSON = JSON.parse(jsonStr);  
          console.log(parsedJSON);

        //below will check to see if the values we need in the json are present
        if(!parsedJSON.available){
            this.setState({waiting:'no',json:''})
            window.alert('Please enter valid JSON file with available property')
            return;
        }
        if(!parsedJSON.missing){
            this.setState({waiting:'no',json:''})
            window.alert('Please enter valid JSON file with missing property')
            return;
        }

        //this will store the jsons in the state which will trigger a re render to display vars
        const available = parsedJSON.available;
        const missing = parsedJSON.missing;
        this.setState({available,missing,waiting:'no'});
      
    }
    returnJsonArea() {
        //This function will return the initial text area plus button that will be displayed
        return (
            <div className='col w-50 h-50 m-auto bg-light'>
                <form>
                    <div className="form-group">
                        <label htmlFor="json">Please Enter Json Below</label>
                        <textarea className="form-control" id="json" rows="10" onChange={this.onChange} value={this.state.json}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(event)=>{this.parseAndStore(event)}}>Submit</button>
                </form>
            </div>
        )
    }
    displayLogic() {
        //this function will decide what to render based on what is stored in state

        //this will display if the message is waiting to be parsed
        if(this.state.waiting === 'yes') {
            return <h1>...parsing</h1>
        }

        //this will return the json area if the values are not saved in state
        if (this.state.available === undefined || this.state.missing === undefined) {
            return this.returnJsonArea();
        } else {
            return(
        //will return the vars from the json and display them
            <div>
                <h1>Available: {this.state.available}</h1>
                <h1>Missing: {this.state.missing}</h1>
            </div>
            )
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