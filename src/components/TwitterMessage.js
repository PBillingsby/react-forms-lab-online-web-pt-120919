import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ""
    };
  }
  handleChange = e => {
    this.setState({
      message: e.target.value,
      maxChars: this.state.maxChars - 1
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={event => this.handleChange(event)}
        />
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
