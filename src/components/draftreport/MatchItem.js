import React from 'react';
import ReqMatch from './ReqMatch';

const MatchItem = (props) => {
   
    return ( 
       
        <div>
                {console.log(props)}
            {
                
                 props.match.ml_matches.map((match) => (


                    <ReqMatch reqid={match[0].req_id} question={match[0].text} answer={match[1]}/>
                ))
            }
        </div>
     );
}
 

export default MatchItem;