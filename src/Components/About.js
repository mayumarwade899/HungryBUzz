import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="mb-[100%]">
      <h1>Welcome to HungryBuzz World!🍔</h1> <br></br>
      <h3>Mission: </h3>
      <p>
        Our mission is to elevate the quality of life for the urban consumer
        with unparalleled convenience.<br></br> Convenience is what makes us
        tick. It's what makes us get out of bed and say, "Let's do this."
      </p>
      {/* <User name={"Mayur Marwade"} location={"Hyderabad"} contact={"@mayugithub899"}/> */}
      <UserClass name={"Mayur Marwade"} location={"Hyderabad"} company={"@mayugithub899"}/>
    </div>
  );
};

export default About;
