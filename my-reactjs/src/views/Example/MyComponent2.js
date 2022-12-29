import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent2 extends React.Component {


    state = {
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '1500' },
            { id: 'job2', title: 'Web Design', salary: '1000' },
            { id: 'job3', title: 'Tester', salary: '500' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log('>>> check function from parent: ', job)
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}

export default MyComponent2;