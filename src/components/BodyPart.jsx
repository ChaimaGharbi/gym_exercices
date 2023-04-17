import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { hover } from "@testing-library/user-event/dist/hover";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        textAlign: "center",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div>
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: "40px", height: "40px", marginBottom: "20px" }}
        />
        <Typography
          fontSize={"24px"}
          fontWeight={"bold"}
          color={"#3A1212"}
          textTransform={"capitalize"}
        >
          {item}
        </Typography>
      </div>
    </Stack>
  );
};

export default BodyPart;
