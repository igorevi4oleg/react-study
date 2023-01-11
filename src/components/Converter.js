import React from "react";

class ExchangeRates extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        usd: 0,
        eur: 0,
      }
    }
    

    componentDidMount(){
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD,EUR')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const usd = 2 / data.rates.USD
                const eur = 3 / data.rates.EUR
                this.setState({usd, eur})
            })

    }


    
    render() {


      return (
        
        <div>
                <span>Курсы валют:</span>
                 <b> USD </b>
                 <span>{this.state.usd.toFixed(2)}</span>
                 <b> EUR </b>
                 <span>{this.state.eur.toFixed(2)}</span>
        </div>
      )
    }
  }

  export default ExchangeRates;