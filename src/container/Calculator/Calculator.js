import React,{ Component } from 'react';
import Display from '../../components/Display/Display';
import Layout from '../../components/Layout/Layout';
class Calculator extends Component{
    

    constructor(props){
        super(props);
        this.state={

            display:'',
        
            };
    };
    // // showToDisplay=val=>{
    // //     this.setState({display:this.state.display + val})
    // // }
    buttonClicked=(name)=> {
        if( name === '='){
            this.calculate()
        
        }
        else if( name === 'c'){
          this.intialState()
        }
        else
        // {
        //  this.setState({
        //     display: name,
        // })
        {
        this.setState({
            display: this.state.display +name,
        });
        }
    };

    calculate= ()=>{
        this.setState({
            display:eval(this.state.display)
        })
    }

    intialState = () =>{
        this.setState({
            display:'',
        })
    }


    render() {    
        return(
            <div className={'Calculator'}>
                
                  <Display display ={this.state.display}/>
                 <Layout
                buttonClicked = {this.buttonClicked}
                
                 /> 

            </div>
        )
    }
}

export default Calculator ;
