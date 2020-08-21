const local = {
	  neo4j: {
            URI: "bolt://localhost:7687",
            USER: "neo4j",
            PASS: "developer"
          }
};

const docker = {
	  neo4j: {
            URI: "bolt://"+window.location.hostname+":7687",
            USER: "neo4j",
            PASS: "developer"
          }
};

const config = process.env.REACT_APP_ENV === 'docker'
  ? docker
  : local;

export default {
	// Add common config values here
	MAX_ATTACHMENT_SIZE: 5000000,
	...config
};
