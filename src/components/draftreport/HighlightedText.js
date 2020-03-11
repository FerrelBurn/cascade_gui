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
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {
        this.setState({ currentIndex: this.props.currentIndex });
    }
    handleClick(e) {
        let thingy = this.props.matches.find(obj => obj.matchText === this.props.text)
        let currentIndex = this.props.matches.indexOf(thingy)
        this.setState({
            show: true,
            currentIndex: currentIndex
        })
        //this.props.handleAddRequirement(thingy)

    }
    handleClose(e) {
        this.setState({ show: false })
    }
    render() {

        return (
            // style={this.state.highlighted ? { backgroundColor: 'yellow' } : {}}
            <span style={this.props.highlighted ? { backgroundColor: this.state.color } : {}}>

                <RequirementsMatcher
                    show={this.state.show}
                    handleClose={this.handleClose}
                    handleAddRequirement={this.props.handleAddRequirement}
                    matches={this.props.matches}
                    currentIndex={this.state.currentIndex}
                    handleClick={this.handleClick}
                    text={this.props.text} />

            </span>


        );
    }
}

export default HighlightedText;