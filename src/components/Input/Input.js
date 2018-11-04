import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {
    inputFormula: "2+2",
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.inputFormula);
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      inputFormula: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3 htmlFor="comment">Enter Math Equation</h3>
      
<form className={"form " + this.props}>
  <div className="form-inner">
    <input
      value={this.state.inputFormula}
      name="mathInput"
      onChange={this.handleInputChange}
      type="text"
    />
    <div className="col-container">
      <div className="col-inner">
        <button
          classname="btn-1"
          type="submit"
          name="action"
          onClick={this.handleFormSubmit}
        >
          <span>Submit</span>
        </button>
      </div>

      <div />
      <div className="col-inner space" />
      <div className="col-inner">
        <button
          classname="btn-2"
          type="reset"
          name="action"
          onClick={this.handleFormSubmit}
        >
          <span>Clear</span>
        </button>
      </div>
    </div>
  </div>
</form>

          <h3 className="gist-comment">Math Word Problem</h3>
          <div>
            {(this.state.results && this.state.results.name) || ""}
            {/* {this.props.comments.map(comment => (
                  <Comment
                      key={comment._id}
                      comment={comment.comment}
                      authorName={comment.author.name}
                      date = {comment.date}
                  />
              ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
