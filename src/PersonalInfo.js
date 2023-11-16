import Typography from "@mui/material/Typography";
function PersonalInfo() {
  return (
    <div>
      <section style={{ width: "500px" }}>
        <div
          style={{
            position: "relative",
            left: "50%",
            color: "black",
          }}
        >
          {" "}
          {/* div containing personal info */}
          <div>
            <h1
              style={{
                color: "green",

                position: "relative",
                fontSize: "60px",
                left: "15%",
                margin: "50px 0px 5px",
              }}
            >
              Anurag
            </h1>
            <h4
              style={{
                position: "relative",
                fontSize: "60px",
                left: "15%",
                margin: "5px 0px",
              }}
            >
              Pandey
            </h4>
          </div>
          <div>
            <h1
              style={{
                position: "relative",

                left: "15%",
                color: "darkgray",
                margin: "15px 0px 5px",
              }}
            >
              Full-Stack Developer • India
            </h1>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                fontSize: "20px",
                position: "relative",
                left: "15%",
                textAlign: "justify",
              }}
            >
              Hi, I am Anurag 🙋🏻‍♂️, As a dynamic and driven Full-Stack Developer,
              I'm passionate about creating innovative solutions and leveraging
              cutting-edge technologies to craft exceptional web applications.
              Proficient in a versatile skill set that includes React,
              JavaScript, and C#, I thrive in solving complex problems and
              designing seamless user experiences.
            </Typography>
          </div>
          <div>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                position: "relative",
                left: "15%",
                margin: "5px 0px",
              }}
            >
              Tech-stack
            </h1>
            <ul
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                position: "relative",
                left: "12%",
                margin: "5px 0px",
              }}
            >
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Java</li>
              <li>Spring-Boot</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PersonalInfo;
