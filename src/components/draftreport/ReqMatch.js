import React, { Component } from 'react';
import "./fixedSizedModal.css";
class ReqMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="">
                <div className="row  " >
                    <div className="col">
                   <b> ({this.props.reqid}): </b>{this.props.question}
                    </div>
                    <br/>
                </div>
                <div className="row">
                    <div className="col">
                       <b> Answered by:</b> {this.props.answer}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ReqMatch;