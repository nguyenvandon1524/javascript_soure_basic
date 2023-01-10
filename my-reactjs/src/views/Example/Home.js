import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/logoDon.jpg'

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todos')
        // }, 3000)
    }
    render() {
        return (
            <>
                <div> Hello Home Page </div>
                <div> <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} /></div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);