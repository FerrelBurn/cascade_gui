import React from 'react';
import '../css/index.css';
import AddReporting from './AddReporting';


function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddReporting/>
              {/* <div>Search Appointments</div>
              <div>List Appointments</div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
