import React, { Component } from 'react';
import MatchedRequirement from './MatchedRequirement';
const Requirement = (props) => {
    return (<div class="row">
        <div class="col">
            Requirement
        </div>
        <div class="col">
            <MatchedRequirement/>
            </div>
    </div>);
}

export default Requirement;