import React from 'react';

class QuestThree extends React.Component{
    constructor(props){
        super(props);
        this.state = {answer:'  '};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            answer:'Answer: Antartica is the coldest dessert of the world!'

        })
    }
    render(){
        return(
            <div>
                <h2>Question 3:Which is the coldest dessert in world? </h2>
                <h3>{this.state.answer}</h3>
                <button onClick={this.clickHandler}>Click to see the Answer!</button>
                
            </div>
            
        )
    }
}
export default QuestThree;