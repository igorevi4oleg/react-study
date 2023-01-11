import React from "react";




const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


class Birthday extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isInFuture: true
      }
    }

    
    
    componentDidMount() {

            const countDown = setInterval(() => {
            const now = new Date().getTime()
            const birthday = new Date('January 10, 2023 00:00:00').getTime()
            const delay = birthday - now

                if (delay < 0) {
                    clearInterval(countDown)
                    this.setState(
                        {isInFuture : false}
                        
                )}
                
                const days = Math.floor(delay / (day))
                const hours = Math.floor(delay % (day) / hour)
                const minutes = Math.floor(delay % (hour) / minute)
                const seconds = Math.floor(delay % (minute) / second)

                this.setState({
                    days,
                    hours,
                    minutes,
                    seconds
                })
                
            
        }, 1000)
        

    }


    componentWillUnmount() {

        clearInterval(this.countDown)

    }
    
    render() {
        const {days, hours, minutes, seconds} = this.state
      return (
        <div className="main-container">
          <h1 className="title">To my birthday:</h1>
          <div className="counter">
            <div className="clock-part">
              <span className="number">{days}</span>days
            </div>
            <div className="clock-part">
              <span className="number">{hours}</span>Hours
            </div>
            <div className="clock-part">
              <span className="number">{minutes}</span>Minutes
            </div>
            <div className="clock-part">
              <span className="number">{seconds}</span>Seconds
            </div>
          </div>
          <div className="birthday-emoji">🎉</div>
        </div>
      )
    }
  }
  
  export default Birthday;