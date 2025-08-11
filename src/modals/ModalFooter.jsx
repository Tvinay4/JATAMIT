import React from "react";
import { Box, Divider } from "@mui/material";
import MyButton from "../component/MyButton";
import LogoComponent from "../component/LogoComponent";
import { indoNepal } from "../iconsImports";
import Loader from "../component/loading-screen/Loader";
import Mount from "../component/Mount";

const ModalFooter = ({
  form,
  btn,
  typeWallet,
  twobuttons = false,
  request = false,
  disable = false,
  disableButtontwo = false,
  handleClose,
  type = "submit",
  onClick,
  onClick2,
  icon = false,
  nepalFooter = false,
  loadingInButton = true,
  red1 = false,
  red2 = false,
}) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Divider
        sx={{
          borderColor: "rgba(138, 64, 165, 0.2)",
          mb: 2,
          borderWidth: "1px",
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Logo Section */}
        {!typeWallet && (
          <Box
            sx={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: "12px",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              order: { xs: 2, sm: 1 },
              width: { xs: "100%", sm: "auto" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <LogoComponent width="100px" />
          </Box>
        )}

        {/* Nepal Footer Image */}
        {nepalFooter && (
          <Box
            sx={{
              order: { xs: 2, sm: 1 },
              width: { xs: "100%", sm: "auto" },
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <img
              src={indoNepal}
              alt="Nepal flag"
              style={{
                width: "100px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        )}

        {/* Buttons Section */}
        {!nepalFooter && (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              order: { xs: 1, sm: 2 },
              width: { xs: "100%", sm: "auto" },
              justifyContent: { xs: "center", sm: "flex-end" },
              flexDirection: { xs: "column-reverse", sm: "row" },
            }}
          >
            {handleClose ? (
              <MyButton
                text={btn || "Cancel"}
                onClick={handleClose}
                variant="outlined"
                sx={{
                  color: "#8A40A5",
                  borderColor: "#8A40A5",
                  "&:hover": {
                    backgroundColor: "rgba(138, 64, 165, 0.08)",
                    borderColor: "#8A40A5",
                  },
                }}
              />
            ) : (
              <>
                {twobuttons && (
                  <MyButton
                    text={twobuttons || "Cancel"}
                    disabled={request || disableButtontwo}
                    type={type}
                    form={form || ""}
                    variant="outlined"
                    onClick={onClick2}
                    icon={icon}
                    sx={{
                      color: red2 ? "#F56C63" : "#8A40A5",
                      borderColor: red2 ? "#F56C63" : "#8A40A5",
                      "&:hover": {
                        backgroundColor: red2
                          ? "rgba(245, 108, 99, 0.08)"
                          : "rgba(138, 64, 165, 0.08)",
                        borderColor: red2 ? "#F56C63" : "#8A40A5",
                      },
                    }}
                  />
                )}

                <Box sx={{ position: "relative" }}>
                  <Mount visible={loadingInButton}>
                    <Loader changeloder=" " loading={request} size="small" />
                  </Mount>
                  <MyButton
                    text={btn || "Save"}
                    disabled={request || disable}
                    type={type}
                    form={form || ""}
                    onClick={onClick}
                    icon={icon}
                    sx={{
                      backgroundColor: red1 ? "#F56C63" : "#8A40A5",
                      "&:hover": {
                        backgroundColor: red1 ? "#e05a52" : "#793a92",
                      },
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ModalFooter;
