import React from 'react';
import Box from './Box';



export default class Koala extends React.Component{
    render(){
        return(
            <div>
                <Box colors={this.props.colors}/>
            </div>
        );
    }
}