import React from "react";


class TimeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
}

    componentDidMount() {

        this.timerID = setInterval(() => this.tick(), 1000)

    }

    tick() {

        this.setState({
            date: new Date()
        })
    }


    componentWillUnmount() {

        clearInterval(this.timerID)

    }


    render() {

        const { date } = this.state;

        return (

            <div>{date.toLocaleTimeString()}</div>
        )
    }


}


export default TimeShow;