import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

import { FaGithub } from "react-icons/fa";
function ContactInfo() {
  return (
    <section style={{ width: "30%" }}>
      <div
        style={{
          height: "70%",
          background: "green",
        }}
      >
        <div
          style={{
            display: "flex",

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "25px",
              color: "white",
              margin: "300px 20px 5px",
              padding: "2px",
            }}
          >
            <MdEmail size={25} color="white" />
            Email
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "white",
              margin: "0px 20px",
            }}
          >
            anuragpandey4900@gmail.com
          </div>
          <div
            style={{
              fontSize: "25px",
              color: "white",
              margin: "20px",
            }}
          >
            <CiPhone />
            Phone
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "white",
              margin: "0px 20px",
            }}
          >
            +91-7011964731
          </div>
        </div>
      </div>
      <div
        style={{
          height: "30%",
          background: "yellow",
        }}
      >
        <div style={{ margin: "5px 0px 0px " }}>
          <div
            style={{
              fontSize: "25px",
              color: "black",
              margin: "0px 10px",
            }}
          >
            Find me on
          </div>
          <div
            style={{
              fontSize: "25px",
              color: "black",
              margin: "0px 10px 0px",
            }}
          >
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
