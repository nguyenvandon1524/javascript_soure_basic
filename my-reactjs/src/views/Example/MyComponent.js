import React from "react";


class MyComponent extends React.Component {

    state = {
        names: '',
        dates: '24/05/1999'
    }

    /**
     * Handle input character dispear in screen
     */
    handleOnChangeName = (event) => {
        // setState call value now
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

export default MyComponent;