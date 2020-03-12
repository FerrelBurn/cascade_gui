import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            content: '',
            url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log("submit")
        this.setState({ value: event.target.value.toUpperCase() });
        this.sendData(this.state.url, this.state.content);

    }
    handleChange(event) {
        //  this.setState({ value: event.target.value });

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(name)
    }
    sendData(url, payload) {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        console.log("url: " + url);
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('POST', url)
        // send the request
        xhr.send(JSON.stringify({ report: payload }))
    }
    render() {
        return (
            <Row>
                <Col className="text-center" md={{ span:10, offset: 1}}>
                    <img src={require('./CASCADE.png')} alt="CASCADE" />
                </Col>
            </Row >



        );
    }
}

export default Home;