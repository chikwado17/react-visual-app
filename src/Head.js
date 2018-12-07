import React from 'react';


export default class Head extends React.Component {

    state = {
        color:this.props.colors.lightGray
    }

   
    componentDidMount(){

       setTimeout(() => {
            this.setState({color:this.props.colors.darkGray});
       },1000);
    }

    componentWillMount(){
        this.setState({color:this.props.colors.white});
    }


    updateColor = () => {
        this.setState(() => ({
            color:this.props.colors.darkGray
        }));
    }

    render(){
        return(
            <div  style={{background:this.state.color}} className="head">
               
            </div>
        );
    }
}

