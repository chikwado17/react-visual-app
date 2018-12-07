import React from 'react';
import Head from './Head';
import EarLeft from './EarLeft';
import EarRight from './EarRight';
import EyeLeft from './EyeLeft';
import EyeRight from './EyeRight';
import Nose from './Nose';
import HairLeft from './HairLeft';
import HairRight from './HairRight';

class Box extends React.Component {
   
    render() { 
        return (  
            <div className="box">
                <EarLeft colors={this.props.colors}/>
                <EarRight colors={this.props.colors}/>
                <EyeLeft colors={this.props.colors}/>
                <EyeRight colors={this.props.colors}/>

                <Head colors={this.props.colors}/>
                <Nose color={this.props.colors.brown}/>
                <HairLeft color={this.props.colors.lightGray}/>
                <HairRight color={this.props.colors.lightGray}/>
            </div>
        );
    }
}
 
export default Box;