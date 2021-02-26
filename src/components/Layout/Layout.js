import React,{Component} from 'react';
import './Layout.css';



class Layout extends Component  {

    buttonClicked=(evnt)=>{
        this.props.buttonClicked(evnt.target.name)
    }
   
    render(){
return(
    <div >
       
        <div  className= {'Layout'}>
            <button className= {'Button'} name = '1' onClick={this.buttonClicked}>1</button>
            <button className= {'Button'} name = '2' onClick={this.buttonClicked}>2</button>
            <button className= {'Button'} name = '3' onClick={this.buttonClicked}>3</button>
            <button className= {'ButtonOP'} name = '+' onClick={this.buttonClicked}>+</button>
        </div>
        <div className= {'Layout'}>
            <button className= {'Button'} name = '4' onClick={this.buttonClicked}>4</button>
            <button className= {'Button'} name = '5' onClick={this.buttonClicked}>5</button>
            <button className= {'Button'} name = '6' onClick={this.buttonClicked}>6</button>
            <button className= {'ButtonOP'} name = '-' onClick={this.buttonClicked}>-</button>
        </div>

        <div className= {'Layout'}>
            <button className= {'Button'} name = '7' onClick={this.buttonClicked}>7</button>
            <button className= {'Button'} name = '8' onClick={this.buttonClicked}>8</button>
            <button className= {'Button'} name = '9' onClick={this.buttonClicked}>9</button>
            <button className= {'ButtonOP'} name = '*' onClick={this.buttonClicked}>*</button>
        </div>
        <div className= {'Layout'}>
            <button className= {'ButtonC'} name = 'c' onClick={this.buttonClicked}>c</button>
            <button className= {'Button'} name = '0' onClick={this.buttonClicked}>0</button>
            <button className= {'ButtonEQ'} name = '=' onClick={this.buttonClicked}>=</button>
            <button className= {'ButtonOP'} name = '/' onClick={this.buttonClicked}>/</button>
        </div>
        <div>
            
           
           
            
        </div>

    </div>
);
    }
}

export default Layout;