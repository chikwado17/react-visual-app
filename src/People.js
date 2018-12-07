import React from 'react';


class People extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Person name="chikwado"  hair="brown" age="26"/>
            </div>
        );
    }
}
 

export default People;


class Person extends React.Component {
    state = {  }
    render() { 
        return ( 
            
            <p>My name is {this.props.name}, my hair color is {this.props.hair} and my age is {this.props.age}</p>
            
         );
    }
}
 
