import React from 'react';

class QuestFour extends React.Component{
    constructor(props){
        super(props);
        this.state = {answer:'  '};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            answer:'Answer: Russia is the largest country in the world!'

        })
    }
    render(){
        return(
            <div>
                <h2>Question 4: Which is the Largest Country in the world? </h2>
                <h3>{this.state.answer}</h3>
                <button onClick={this.clickHandler}>Click to see the Answer!</button>
                
            </div>
            
        )
    }
}
export default QuestFour;