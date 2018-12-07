import React, { Component } from 'react';
import OuterEyeLeft from './OuterEyeLeft';
import PupilLeft from './PupilLeft';




class EyeLeft extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <OuterEyeLeft color={this.props.colors.white}/>
                <PupilLeft color={this.props.colors.navy}/>
            </div>
         );
    }
}
 
export default EyeLeft;