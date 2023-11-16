import imag from "./dp.jpeg";
import { FaSquare } from "react-icons/fa";
import { RiRectangleFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa6";
import { TbRectangleVerticalFilled } from "react-icons/tb";

function OverlayComponents() {
  return (
    <div>
      <section style={{ position: "absolute", left: "20%", bottom: "15%" }}>
        <img
          src={imag}
          alt="dp"
          width="420px"
          height="540px"
          style={{ borderRadius: "50px" }}
        />
      </section>
      <section style={{ position: "absolute", left: "18%", bottom: "70%" }}>
        <FaSquare size={60} color="white" />
      </section>
      <section style={{ position: "absolute", left: "25%", bottom: "10%" }}>
        <FaSquare size={60} color="white" />
      </section>
      <section style={{ position: "absolute", left: "50%", bottom: "70%" }}>
        <RiRectangleFill size={90} color="gray" />
      </section>
      <section style={{ position: "absolute", left: "92%", bottom: "88%" }}>
        <FaCircle size={150} color="green" />
      </section>
      <section style={{ position: "absolute", left: "45%", bottom: "92%" }}>
        <TbRectangleVerticalFilled size={80} color="green" />
      </section>
      <section style={{ position: "absolute", left: "45%", top: "92%" }}>
        <TbRectangleVerticalFilled size={80} color="green" />
      </section>
      <section style={{ position: "absolute", left: "45%", top: "85%" }}>
        <TbRectangleVerticalFilled size={80} color="green" />
      </section>
    </div>
  );
}
export default OverlayComponents;
