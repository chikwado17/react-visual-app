import React, { Component } from 'react';





class Buttons extends Component {

   constructor(props){
       super(props)
    this.upDateButton1 = this.upDateButton1.bind(this);
    this.upDateButton2 = this.upDateButton2.bind(this);
    this.resetButton = this.resetButton.bind(this);
       this.state = {
        click1: 0,
        click2: 0
        }
   }


    upDateButton1(){
        this.setState((prevSate)=>({
            click1:prevSate.click1 + 1
        }));
    }

    upDateButton2(){
        this.setState((prevSate)=>({
            click2:prevSate.click2 - 1
        }));
    }

    resetButton(){
        this.setState(() => ({
            click1:0
        }));
    }

    render() { 
      
        return (  
            <div>
               <button onClick={this.upDateButton1}>click1: {this.state.click1}</button>
               <br/> <br/>
               <button onClick={this.upDateButton2}>click2: {this.state.click2}</button>
               <button onClick={this.resetButton}>Reset button 1</button>
            </div>
        );
    }
}
 
export default Buttons;





