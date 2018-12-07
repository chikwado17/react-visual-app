import React, { Component } from 'react';
import OuterEyeRight from './OuterEyeRight';
import PupilRight from './PupilRight';


class EyeRight extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <OuterEyeRight color={this.props.colors.white}/>
                <PupilRight color={this.props.colors.navy}/>
            </div>
         );
    }
}
 
export default EyeRight;