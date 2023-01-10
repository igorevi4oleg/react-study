import React from "react";

class Button extends React.Component {

    constructor(props){
      super(props);
      this.state = {clicked : false}
    }

    render() {

      const {clicked} = this.state

      if(clicked) {

        return (<button onClick={() => this.setState({clicked : false})}>Clicked</button>)
      }

      return (
      
      <button onClick={() => this.setState({clicked : true})}>Click Me</button>
      
      )

    }
}



export default Button;
