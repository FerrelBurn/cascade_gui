import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Table } from 'react-bootstrap';

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

        axios.get("/peruse/seed_relationships")
            .then((response) => {

                self.match(response.data);

            })
            .catch((error) => console.error(error))

    }
    match(data) {

        for (const d in data) {
            for (const i in data[d].matches) {
                data[d].matches[i].score = Math.round(data[d].matches[i].score * 1000) / 10 + "%";
            }

        }
        this.setState({ "matches": data })
    }
    roundScore(score) {
        return Math.floor(score * 100)
    }
    remove(index, i, uuid1, uuid2) {
        // create a new XMLHttpRequest
        let self = this;

        axios.get("/peruse/remove_rel/" + uuid1 + "/" + uuid2)
            .then((response) => {

                self.updateStateAfterRemove(index, i)

            })
            .catch((error) => console.error(error))
    }
    acceptRelationship(index, i, uuid1, uuid2) {
        // create a new XMLHttpRequest
        let self = this;

        axios.get("/peruse/accept_rel/" + uuid1 + "/" + uuid2)
            .then((response) => {

                self.updateStateAfterRemove(index, i)

            })
            .catch((error) => console.error(error))
    }
    updateStateAfterRemove(index, i) {
        var m = this.state.matches;
        m[index].matches.splice(i, 1);
        this.setState({ "matches": m })
    }

    render() {
        return (

            <Container>
                {

                    <Button onClick={this.matchRequirements}>Crosswalk</Button>



                }
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Requirement</th>
                            <th>Possibly related requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matches.map((requirement, index) => (

                            <tr >
                                <tr>
                                    <td >{requirement.requirement}</td>
                                </tr>
                                <tr>
                                    <td><b>REQ_ID:</b> {requirement.req_id}</td>
                                </tr>
                                <tr>
                                    <td >{requirement.text}</td>
                                </tr>

                                <td >
                                    {requirement.matches.map((match, i) => (
                                        <tr >
                                            <td><b>REQ_ID:</b> {match.req_id}</td>
                                            <td><b>Text:</b> {match.text}</td>
                                            {/* <td><b>UUID:</b> {match.uuid}</td> */}
                                            <td><b>Score:</b> {match.score}</td>
                                            <td>
                                                <Button variant="outline-success" size="sm" onClick={() => this.acceptRelationship(index, i, requirement.requirement, match.uuid)}>Accept</Button>
                                            </td>
                                            <td>
                                                <Button variant="outline-danger" size="sm" onClick={() => this.remove(index, i, requirement.requirement, match.uuid)}>Decline</Button>
                                            </td>
                                        </tr>
                                    ))

                                    }
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </Table>
            </Container>


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


