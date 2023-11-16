import Card from "@mui/material/Card";

import { CardActionArea } from "@mui/material";

import OverlayComponents from "./OverlayComponents";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
function BusinessCard() {
  return (
    <main className="center-container">
      <div className="center-content">
        <Card sx={{ width: 1200, borderRadius: "50px", boxShadow: "" }}>
          <CardActionArea>
            <div style={{ display: "flex", flexDirection: "row", height: 700 }}>
              {/*section 1 starts here */}
              <ContactInfo />

              {/*section 1 ends here*/}

              {/*Devision of section*/}

              {/*section 2 starts here*/}
              <PersonalInfo />
              {/*section 2 ends here*/}

              {/* section 3 starts here*/}
              <OverlayComponents />
              {/* section 3 ends here*/}
            </div>
          </CardActionArea>
        </Card>
      </div>
    </main>
  );
}
export default BusinessCard;
