import React from 'react';
import ReqMatch from './ReqMatch';

const MatchItem = (props) => {
    {
        console.log(props.match.ml_matches)
    }
    return ( 
       
        <div>
           
            {
                
                 props.match.ml_matches.map((match) => (


                    <ReqMatch question={match[0]} answer={match[1]}/>
                ))
            }
        </div>
     );
}
 

export default MatchItem;