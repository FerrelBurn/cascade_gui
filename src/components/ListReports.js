import React, {Component} from 'react';

class ListReports extends Component{
    render(){
      
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.reports.map(report => (
                    <div className="pet-item col media py-3">
                    {/* <div className="mr-3">
                      <button className="pet-delete btn btn-sm btn-danger">X</button>
                    </div> */}
        
                    <div className="pet-info media-body">
                      <div className="pet-head d-flex">
                        <span className="pet-name">{report.serial.crc}</span>
                        <span className="apt-date ml-auto">{report.acqDate}</span>
                      </div>
        
                      <div className="owner-name">
                        <span className="label-item">Subj: </span>
                        <span>{report.subject} </span>
                      </div>
                      <div className="apt-notes">{report.text}</div>
                    </div>
                  </div>
                ))}
            
        </div>
        );
    }
}

export default ListReports; 