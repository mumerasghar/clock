import React from "react";
import ReactDOM from 'react-dom'

class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount() {
        console.log("In unmount")
        clearInterval(this.timerId);
    }

    tick() {
        console.log("In Timer")
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div onClick={() => this.props.clickHandle()}>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        console.log("Constructor")
        this.state = {
            show: true
        }
    }

    clickHandle() {
        console.log("Click Handle")
        this.setState({
            show: false
        })
    }

    render() {
        let child;
        if (this.state.show) {
            child = <Child clickHandle={() => this.clickHandle()}/>
        }

        return (
            <div>
                {child}
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Clock specific="1"/>
                <Clock specific="2"/>
                <Clock specific="3"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))