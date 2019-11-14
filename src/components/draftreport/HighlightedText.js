import React, { Component } from 'react';
class HighlightedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlights: [],
            highlighted: true,
            color: 'yellow'
        }
    }
    render() {
        // console.log("***************")
        // console.log(this.props)
        // console.log(this.state.highlighted)
        return (
            // style={this.state.highlighted ? { backgroundColor: 'yellow' } : {}}
            <span style={this.props.highlighted ? { backgroundColor: this.state.color } : {}}>
                {this.props.text}
            </span>


        );
    }
}

export default HighlightedText;