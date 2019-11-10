import React, { Component } from 'react';
import MatchItem from './MatchItem';
import { Button } from 'react-bootstrap';


class MatchesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            currentIndex: 0
        }
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);

    }
    componentDidMount() {
        this.setState({
            matches: this.props.matches,
            currentIndex: 0
        });
    }
    next() {

        var nextIndex = this.state.currentIndex;
        if (this.state.currentIndex < this.state.matches.length) {
            nextIndex = this.state.currentIndex + 1
            this.setState({ currentIndex: nextIndex });
        }

    }
    back() {

        if (this.state.currentIndex > 0) {
            var lastIndex = this.state.currentIndex - 1;
            this.setState({ currentIndex: lastIndex });
        }
    }
    render() {
        return (
            <div className="container">
                <MatchItem match={this.props.matches[this.state.currentIndex]} />
                <div className="row">
                    <div className="col">
                        <Button onClick={this.back}>back</Button>
                    </div>
                    <div className="col">
                        <Button onClick={this.next}>next</Button>
                    </div>

                </div>

            </div>
        );
    }
}



export default MatchesView;