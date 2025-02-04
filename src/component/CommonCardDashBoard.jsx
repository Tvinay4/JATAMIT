import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const CommonCardDashBoard = ({ name, img, onClick }) => {
  return (
    <Tooltip title={name} placement="top">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f8f9fa 30%, #e3e6ea 100%)",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          padding: { xs: "10px", sm: "14px" },
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-3px)",
          },
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            width: { xs: "90px", sm: "100px" },
            height: { xs: "90px", sm: "100px" },
            mt: 1,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            background: "white",
            mb: 1,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.07)",
              boxShadow: "0px 6px 10px rgba(0, 176, 89, 0.3)",
            },
          }}
        >
          <img
            src={img}
            alt={name}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "20%",
            }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            color: "#333",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            fontSize: { xs: "13px", sm: "15px" },
          }}
        >
          {name}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export default CommonCardDashBoard;
