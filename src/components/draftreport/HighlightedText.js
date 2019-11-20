import React, { Component } from 'react';
import RequirementsMatcher from './RequirementsMatcher';
class HighlightedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: this.props.currentIndex,
            highlighted: true,
            color: 'yellow'
        }
    }
    componentDidMount() {
        this.setState({ currentIndex: this.props.currentIndex });
    }
    render() {
        //  console.log("***************")
        //  console.log(this.props.matches)
        // console.log(this.state.highlighted)
        return (
            // style={this.state.highlighted ? { backgroundColor: 'yellow' } : {}}
            <span style={this.props.highlighted ? { backgroundColor: this.state.color } : {}}>

                <RequirementsMatcher
                    handleAddRequirement={this.props.handleAddRequirement}
                    matches={this.props.matches}
                    currentIndex={this.state.currentIndex}
                    text={this.props.text} />

            </span>


        );
    }
}

export default HighlightedText;