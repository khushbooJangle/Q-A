import React from 'react';

class QuestFive extends React.Component{
    constructor(props){
        super(props);
        this.state = {question:'Question 5: Which is the highest mountain cliff in the World?'};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            
            question:'Answer: The highest cliff is Mauna Kea'

        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.question} </h2>
                <button onClick={this.clickHandler}>Click to see the Answer!</button>
            </div>
            
        )
    }
}
export default QuestFive;