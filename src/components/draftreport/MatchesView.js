import React, { Component } from 'react';
import MatchItem from './MatchItem';
import { Button } from 'react-bootstrap';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";



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
            currentIndex: this.props.currentIndex
        });
    }
    next() {

        var nextIndex = this.state.currentIndex;
        if (this.state.currentIndex < (this.state.matches.length - 1)) {
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
            <div className="container my-modal" >

                <div className="row ">
                    <div className="col">
                        <Button variant="secondary" onClick={this.back}><MdChevronLeft /> Back</Button>
                    </div>
                    <div className="col pull-right" >
                        <Button variant="secondary" onClick={this.next}>Next <MdChevronRight /></Button>
                    </div>

                </div>
                <div className="row">
                <MatchItem match={this.props.matches[this.state.currentIndex]} />
                </div>
            </div>
        );
    }
}



export default MatchesView;