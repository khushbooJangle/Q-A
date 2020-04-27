import React from 'react';

class QuestTwo extends React.Component{
    constructor(props){
        super(props);
        this.state = {answer:'  '};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            answer:'Answer: There are 28 States in India!'

        })
    }
    render(){
        return(
            <div>
                <h2>Question 2:How many States in the India? </h2>
                <h3>{this.state.answer}</h3>
                <button onClick={this.clickHandler}>Click to see the Answer!</button>
                
            </div>
            
        )
    }
}
export default QuestTwo;