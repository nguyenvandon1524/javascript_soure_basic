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
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log('>>> check function from parent: ', job)
    }

    deleteJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run component did month')
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}



export default MyComponent2;