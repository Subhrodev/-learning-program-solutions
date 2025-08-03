import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true,
    };
  }

  // Fetch data after component is mounted
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]); // log the fetched user data
  }

  render() {
    const { loading, person } = this.state;

    if (loading) {
      return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>User Details</h2>
        <img
          src={person.picture.large}
          alt="User"
          style={{ borderRadius: "50%", width: "120px", height: "120px" }}
        />
        <h3>
          {person.name.title} {person.name.first}
        </h3>
      </div>
    );
  }
}

export default Getuser;
