import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        company: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mayumarwade899");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location, contact } = this.props;
    // const { count } = this.state;

    const{name, location, company, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Class Based Component</h1>
        <br></br>
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Company: {company}</h2>
      </div>
    );
  }
}

export default UserClass;
