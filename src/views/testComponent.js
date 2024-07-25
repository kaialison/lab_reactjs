import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TestComponent extends React.Component {
    state = {
        name: '',
        age: '',
        occupation: 'Developer',
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

    render() {
        return (
            <div className="container mt-5">
                <form>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Enter your name"
                            type="text"
                            value={this.state.name}
                            onChange={(event) => this.handleOnChangeName(event)}
                        />
                        <br />
                        <input
                            className="form-control"
                            placeholder="Enter your age"
                            type="number"
                            value={this.state.age}
                            onChange={(event) => this.handleOnChangeAge(event)}
                        />
                        <br />
                        <input
                            className="form-control"
                            placeholder="Enter your occupation"
                            type="text"
                            value={this.state.occupation}
                            onChange={(event) => this.handleOnChangeJob(event)}
                        />
                    </div>
                    <br/>
                    <button
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                        className="btn btn-success">
                        Submit
                    </button>
                </form>
                <ToastContainer />
                <div className="nameClass">
                    Name: {this.state.name}
                </div>
                <div className="ageClass">
                    Age: {this.state.age}
                </div>
                <div className="jobClass">
                    Occupation: {this.state.occupation}
                </div>
            </div>
        );
    }
}

export default TestComponent;