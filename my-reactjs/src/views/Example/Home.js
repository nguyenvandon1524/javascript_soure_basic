import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todos')
        // }, 3000)
    }
    render() {
        return (
            <div> Hello Home Page </div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);