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
      <div className="text-center m-5 p-5 w-[300px] border border-current bg-amber-100">
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
        <img className="h-14 rounded-full m-auto" src={avatar_url} />
        <h2 className="text-[20px] m-2">Name: {name}</h2>
        <h2 className="text-[20px] m-2">Location: {location}</h2>
        <h2 className="text-[20px] m-2">Company: {company}</h2>
      </div>
    );
  }
}

export default UserClass;
