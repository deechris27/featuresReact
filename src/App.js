import React, {Component} from 'react';
import {debounce} from './debounce';


class InputText extends Component{
    state = {text: ""};
    handleChange = e => {
        this.setState({text: e.target.value})
    };

    render(){
        return(
            <div>
               <input onChange={this.handleChange}/>
               <br />
               <textarea value={this.state.text}/>
            </div>
        )
    }
}

class App extends Component{
   state = {show: true};
   handleToggle = debounce(() => {
       this.setState(prevState => ({show: !prevState.show}))
   },2000);

   render(){
       return(
           <div>
               <button onClick={this.handleToggle}>Toggle</button>
               {this.state.show ? <InputText /> : null}
           </div>
       )
   }
}

export default App;