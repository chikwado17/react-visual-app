import React, { Component } from 'react';
import OuterEarRight from './OuterEarRight';
import InnerEarRight from './InnerEarRight'

class EarRight extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <OuterEarRight color={this.props.colors.lightGray}/>
                <InnerEarRight color={this.props.colors.darkGray}/>
            </div>
          );
    }
}
 
export default EarRight;