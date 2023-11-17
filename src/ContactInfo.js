import { FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
function ContactInfo() {
  return (
    <section style={{ width: "30%" }}>
      <div
        style={{
          height: "100%",
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
              background:
                "radial-gradient(circle, hsla(197, 98%, 51%, 1) 0%, hsla(252, 100%, 36%, 1) 84%)",
            }}
          >
            <div
              style={{
                color: "white",
                margin: "40px 70px 5px",
                padding: "2px",
              }}
            >
              <div style={{ margin: "0px 0px 30px" }}>
                <FaLinkedin size={90} />
              </div>
            </div>
          </div>

          <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
            <div
              style={{
                color: "white",
                margin: "40px 70px 5px",
                padding: "2px",
              }}
            >
              <div
                style={{
                  margin: "0px 0px 30px",
                }}
              >
                <FiInstagram size={90} />
              </div>
            </div>
          </div>
          <div
            style={{
              background:
                "radial-gradient(circle, hsla(197, 74%, 43%, 1) 0%, hsla(252, 81%, 58%, 1) 84%)",
            }}
          >
            <div
              style={{
                color: "white",
                margin: "40px 75px 0px",
              }}
            >
              <div style={{ margin: "0px 0px 40px" }}>
                <FaXTwitter size={90} />
              </div>
            </div>
          </div>

          <div style={{ background: "black" }}>
            <div
              style={{
                color: "white",
                margin: "50px 80px 20px",
              }}
            >
              <div style={{ margin: "0px 0px 40px" }}>
                <FaGithub size={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
