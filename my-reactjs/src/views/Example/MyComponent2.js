import React from "react";

class MyComponent2 extends React.Component {

    state = {
        names: 'Dang',
        dates: '24/05/2000'
    }

    /**
     * Handle input character dispear in screen
     */
    handleOnChangeName = (event) => {
        this.setState({
            names: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click Successfully!')
    }

    render() {
        return (
            <React.Fragment>
                <div className="fr">
                    <input value={this.state.names}
                        type="text"
                        onChange={(event) => this.handleOnChangeName(event)}>
                    </input>
                    <br></br>
                    My name is {this.state.names}
                </div>
                <div className="sec">
                    I am {this.state.dates}
                </div>
                <div className="thir">
                    <button onClick={() => { this.handleClickButton() }}>
                        Click me
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent2;