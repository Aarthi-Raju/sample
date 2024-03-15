import React, { Component } from 'react'

export class STwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0
        }
    }
    increament() {
        this.setState({
            x: this.state.x + 1
        },
            () => {
                console.log(this.state.x)
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.props.first} {this.props.second} STwo file x={this.state.x}</h1>
                <button onClick={() => this.increament()}>Click here</button>
            </div>
        )
    }
}

export default STwo
