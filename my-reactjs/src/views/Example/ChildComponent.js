import React from "react";
import './Demo.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        //console.log('>>> check prop: ', this.props)
        // let firstName = this.props.firstName;
        // let lastName = this.props.lastName;

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJob = false';
        console.log('>>>check conditional: ', check)
        //let a = '';
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button style={{ color: 'red' }}
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                                        </div>
                                    )
                                })
                            } </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 600) {


//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })

//                 }
//             </div>
//         </>
//     )
// }


export default ChildComponent;