import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { apiErrorToast } from "../utils/ToastUtil";
import { get } from "../network/ApiController";
import ApiEndpoints from "../network/ApiEndPoints";
import { bankData } from "../utils/constants";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { defaultBIcon } from "../iconsImports";

const DEFAULT_IMAGE = defaultBIcon;
const DEFAULT_COLOR = "#cccccc";
const DEFAULT_BACKGROUNDIMAGE="";
const BankList = () => {
  const [banks, setBanks] = useState([]);

  const getBankValue = () => {
    get(
      ApiEndpoints.GET_BANK_CREDIT_REQ,
      `page=1&paginate=10&role=Ad&platform=WEB&export=`,
      null,
      (res) => setBanks(res.data.data.banks || []),
      (error) => {
        apiErrorToast(error);
        setBanks([]);
      }
    );
  };

  useEffect(() => {
    getBankValue();
  }, []);

  return (
    <Box
      sx={{ padding: "16px",  }}
    >
      <Grid container spacing={2}>
        {banks.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ color: "textSecondary", textAlign: "center", width: "100%" }}
          >
            No banks available.
          </Typography>
        ) : (
          banks
          .filter(bank=>!["DILLIPAY RBI", "CASH AT OFFICE", "OTHER WALLET 1"].includes(bank.name))
          .map((bank, index) => {
            const bankName = bank.name;
            const bankInfo = bankData[bankName] || {
              image: DEFAULT_IMAGE,
              backgroundImage:"",
              color: DEFAULT_COLOR,
            };

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  padding: "16px",
                  borderRadius: "8px",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease",
                  border: "1px solid #f5f5f5",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${bankInfo.backgroundImage || ""})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: "5%",
                    
                  },
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                
                <Box
                  sx={{
                    position: "relative",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: bankInfo.color,
                  }}
                >
                  <img
                    src={bankInfo.image || defaultBIcon}
                    alt={bankName}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      marginLeft: "8px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#000",
                      }}
                    >
                      {bankName}
                    </Typography>
                  </Box>
                </Box>
            
         
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    marginTop: "12px",
                    padding: "8px",
                  
                    borderRadius: "8px",
                  }}
                >
                  {[
                    { label: "Account Name", value: "John Doe" },
                    { label: "Bank Name", value: bankName },
                    { label: "Account No", value: "1234 5678 9012" },
                    { label: "Type", value: "Savings" },
                    { label: "Type of Deposit", value: "Cash Deposit" },
                    { label: "Branch", value: "New Delhi" },
                    { label: "PAN No", value: "ABCDE1234F" },
                  ].map((item, idx) => (
                    <React.Fragment key={idx}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "#000", textAlign: "left" }}
                      >
                        {item.label}:
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555", textAlign: "right" }}>
                        {item.value}
                      </Typography>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </Grid>
            
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default BankList;
