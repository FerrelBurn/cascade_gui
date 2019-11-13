import React, { Component } from 'react';
class HighlightedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlights: [],
            highlighted: true
        }
    }
    render() {
        console.log("***************")
        console.log(this.props)
        // console.log(this.state.highlighted)
        return (
            // style={this.state.highlighted ? { backgroundColor: 'yellow' } : {}}
            <p style={this.props.highlighted ? { backgroundColor: 'yellow' } : {}}>
                {this.props.text}
            </p>


        );
    }
}

export default HighlightedText;