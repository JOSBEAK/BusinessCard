import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
function Tools() {
  return (
    <div>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          left: "20%",
          margin: "5px 0px",
        }}
      >
        Dev-Tools
      </h1>
      <ul
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          left: "7%",
          margin: "5px 0px",
        }}
      >
        <li>
          <FaGithub /> Github
        </li>

        <li>
          <FaDocker color="#4169e1" /> Docker
        </li>
      </ul>
    </div>
  );
}
export default Tools;
