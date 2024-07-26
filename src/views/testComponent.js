import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TestComponent extends React.Component {
    state = {
        name: '',
        age: '',
        occupation: 'Developer',
        showJob: false
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnChangeJob = (event) => {
        this.setState({
            occupation: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Form submitted successfully!", {
            position: "top-center" // Correct position value
        });
        console.log(">>Check SUBMIT ", this.state);
    }

    toggleShowJob = () => {
        this.setState((prevState) => ({
            showJob: !prevState.showJob
        }));
    }

    render() {
        let { showJob } = this.state;
        return (
            <>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Enter your name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleOnChangeName}
                            />
                            <br />
                            <input
                                className="form-control"
                                placeholder="Enter your age"
                                type="number"
                                value={this.state.age}
                                onChange={this.handleOnChangeAge}
                            />
                            <br />
                            <input
                                className="form-control"
                                placeholder="Enter your occupation"
                                type="text"
                                value={this.state.occupation}
                                onChange={this.handleOnChangeJob}
                            />
                        </div>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-success">
                            Submit
                        </button>
                    </form>
                    <ToastContainer />
                    <br />
                    <div>
                        <button
                            className="btn btn-info"
                            onClick={this.toggleShowJob}>
                            {showJob ? "Hide" : "Show"}
                        </button>
                    </div>
                    {showJob &&
                        <>
                            <div className="nameClass">
                                Name: {this.state.name}
                            </div>
                            <div className="ageClass">
                                Age: {this.state.age}
                            </div>
                            <div className="jobClass">
                                Occupation: {this.state.occupation}
                            </div>
                        </>}
                </div>
            </>
        );
    }
}

export default TestComponent;
