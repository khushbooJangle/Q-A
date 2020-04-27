import React from 'react';

class QuestOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer:'  ',
            click: 'Click to see Answer',
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.click=this.click.bind(this);
        this.wrap=this.wrap.bind(this);
    }
    clickHandler(){
        this.setState({
            answer:'Answer: There are 7 Continents in world!'

        });
    }
    click(){
        this.setState({
            click:"Next Question"
        });
    }
    wrap(){
        this.clickHandler();
        this.click();

    }
    render(){
        return(
            <div>
                <h2>Question 1:How many Continents in the World? </h2>
                <h3>{this.state.answer}</h3>
                <button onClick={this.wrap}>{this.state.click}</button>
            </div>
            
        )
    }
}
export default QuestOne