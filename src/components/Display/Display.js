import React, { Component } from 'react';
import './Display.css';


class Display extends Component{
    
 render(){
    return(
    <div className={'Display'}>
    
    <h1>{this.props.display}</h1>

    </div>
        );
      }
    }
export default Display;