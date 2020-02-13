import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class RequirementCrosswalk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: []
        };

        this.matchRequirements = this.matchRequirements.bind(this);
        this.match = this.match.bind(this);
        this.remove = this.remove.bind(this);
    }
    matchRequirements() {

        // create a new XMLHttpRequest
        let self = this;

        axios.get("http://localhost:3005/seed_relationships")
            .then((response) => {

                self.match(response.data);

            })
            .catch((error) => console.error(error))

    }
    match(data) {
        this.setState({ "matches": data })
    }
    remove(index,i, uuid1, uuid2) {
        // create a new XMLHttpRequest
        let self = this;

        axios.get("http://localhost:3005/remove_rel/"+uuid1+"/"+uuid2)
            .then((response) => {
                // var array = [...this.state.people]; // make a separate copy of the array
                // var index = array.indexOf(e.target.value)
                // if (index !== -1) {
                //   array.splice(index, 1);
                //   this.setState({people: array});
                // }
               self.updateStateAfterRemove(index, i)
               
            })
            .catch((error) => console.error(error))
    }
    updateStateAfterRemove(index, i){
        var m = this.state.matches;
        m[index].matches.splice(i, 1);
        this.setState({"matches":m})
    }

    render() {
        return (

            <div className="container">
                {

                    <Button onClick={this.matchRequirements}>Crosswalk</Button>



                }
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Requirement</th>
                            <th>Possibly related</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matches.map((requirement, index) => (

                            <tr >
                                <tr>
                                    <td >{requirement.requirement}</td>
                                </tr>
                                <tr>
                                    <td >{requirement.text}</td>
                                </tr>
                                <td >
                                    {requirement.matches.map((match,i) => (
                                        <tr >
                                            <td >Text: {match.text}</td>
                                            <td >UUID: {match.uuid}</td>
                                            <td >Score: {match.score}</td>
                                            <td><Button onClick={() => this.remove(index, i, requirement.requirement, match.uuid)}>Remove</Button></td>
                                        </tr>
                                    ))

                                    }
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>


        )
    }
}

export default RequirementCrosswalk;


// <div className="container">

// {
//     <div className="row" >
//         <div className="col">
//             <Button onClick={this.matchRequirements}>Crosswalk</Button>
//             <hr/>
//         </div>
//     </div>

// }
// {this.state.matches.map((requirement) => (

//     <div className="row">
//         <div className="col-md-6">{requirement.requirement}</div>
//         <div className="col-md-6">
//             {requirement.matches.map((match) => (
//                 <div className="row">
//                 <div className="col">Text: {match.text}</div>
//                 <div className="col">UUID: {match.uuid}</div>
//                 <div className="col">Score: {match.score}</div>
//             </div>
//             ))

//             }
//         </div>
//         <hr/>
//     </div>

// ))}

// </div>


