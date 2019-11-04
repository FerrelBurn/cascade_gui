import React, { Component }  from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { tsPropertySignature } from '@babel/types';

import { FaTags } from "react-icons/fa";

class RequirementsMatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedReport: null,
        }
    }
    setSelectedReport(report){
        console.log(report)
        this.setState({selectedReport:report})
    }
    render() {
        // console.log(this.state.selectedReport)
        return (
            <a onClick={() => this.setState({ isOpen: true })} alt="match to requirements"
                title="match to requirements" >
                <FaTags />
                <SlidingPane
                    className='some-custom-class'
                    overlayClassName='some-custom-overlay-class'
                    // isOpen={this.state.isPaneOpen}
                    isOpen={this.state.isOpen}
                    title='Hey, it is optional pane title.  I can be React component too.'
                    subtitle='Optional subtitle.'
                    width='40%'
                    onRequestClose={() => this.setState({ isOpen: false })
                    
                    }>
                    <div>ReportId:{this.state.selectedReport}</div>
                    <br />
                    <img src='img.png' />
                </SlidingPane>
            </a>

        );
    }
}

export default RequirementsMatcher;

// const RequirmentsMatcher = (props) => {
//     // console.log(props)

//     return (
//         <a onClick={props.handleClick(this.props.report)} alt="match to requirements"
//             title="match to requirements" >
//             <FaTags />
//             <SlidingPane
//                 className='some-custom-class'
//                 overlayClassName='some-custom-overlay-class'
//                 // isOpen={this.state.isPaneOpen}
//                 isOpen={props.sidePaneOpen}
//                 title='Hey, it is optional pane title.  I can be React component too.'
//                 subtitle='Optional subtitle.'
//                 onRequestClose={() => props.handleClick()
//                 }>
//                 <div>ReportId:{props.report.id}</div>
//                 <br />
//                 <img src='img.png' />
//             </SlidingPane>
//         </a>
//     );

// }

// export default RequirmentsMatcher;
