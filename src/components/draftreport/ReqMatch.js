import React, { Component } from 'react';

class ReqMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <div className="row">
                    <div className="col">
                   <b> question: </b>{this.props.question}
                    </div>
                    <br/>
                </div>
                <div className="row">
                    <div className="col">
                       <b> answered by:</b> {this.props.answer}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ReqMatch;