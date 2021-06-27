import React from 'react';

class GetSysInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const res = await fetch("http://localhost:5000/api/info", {
            method: "GET",
            headers: { 'Content-Type': 'application/json'}
        });
        const data = await res.json();
        this.setState({ info: JSON.stringify(data) })
    }

    render() {
        const { info } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Server Information</h5>
                <div className="card-body">
                    {info}
                </div>
            </div>
        );
    }
}

export default GetSysInfo;