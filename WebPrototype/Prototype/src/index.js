import React from 'react'
import {render} from 'react-dom'

class Form extends React.Component{
    constructor(props){
        super (props);
        this.state={value:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        this.setState({value: event.target.value});
    }
    handleSubmit()
    {
        alert ('Your feedback is published');
        var fs=require('fs');
        var stream = fs.createWriteStream("Documents/Feedback.txt");
        stream.once('open', function(fd){
            stream.write(this.state.value);
            stream.end();
        });
    }
    
    render()
    {
        return (
            <div>
                
                <input type="text" 
                placeholder=''
                value={this.state.value}
                onChange={this.handleChange} />
               
                <textarea>
                </textarea>

            <button onClick={this.handleSubmit}>
                Submit
            </button>       
                                  
            </div>
        );
    }
}
render(<Form />, document.getElementById('root'));
