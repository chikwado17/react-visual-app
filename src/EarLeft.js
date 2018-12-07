import React from 'react';
import OuterEarLeft from './OuterEarLeft';
import InnerEarLeft from './InnerEarLeft'


class EarLeft extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <OuterEarLeft color={this.props.colors.lightGray} />
                <InnerEarLeft color={this.props.colors.darkGray} />
            </div>
          );
    }
}
 
export default EarLeft;