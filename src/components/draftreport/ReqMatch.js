import React, { Component } from 'react';

class ReqMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                question: {this.props.question} | answer: {this.props.answer}
            </div>
         );
    }
}
 
export default ReqMatch;