import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";

function Languages() {
  return (
    <div>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          left: "20%",
          margin: "5px 0px",
          color: "green",
        }}
      >
        Languages
      </h1>
      <ul
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          left: "3%",
          margin: "5px 0px",
        }}
      >
        <li>
          <IoLogoJavascript color="orange" /> Javascript
        </li>
        <li>
          <FaJava color="red" />
          Java
        </li>
      </ul>
    </div>
  );
}
export default Languages;
