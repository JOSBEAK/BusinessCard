import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

function Framework() {
  return (
    <div>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          left: "5%",
          margin: "5px 0px",
          color: "gray",
        }}
      >
        Frameworks
      </h1>
      <ul
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          right: "5%",
          margin: "5px 0px",
        }}
      >
        <li>
          <FaReact color="blue" /> ReactJs
        </li>

        <li>
          <SiSpring color="green" />
          Spring-Boot
        </li>
      </ul>
    </div>
  );
}
export default Framework;
