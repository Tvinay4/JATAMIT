import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
} from "@mui/material";
import { apiErrorToast } from "../utils/ToastUtil";
import { get } from "../network/ApiController";
import ApiEndpoints from "../network/ApiEndPoints";

const BankList = () => {
  const [banks, setBanks] = useState([]); // Initialize banks as an empty array
  const [filteredBanks, setFilteredBanks] = useState([]); // For storing filtered banks
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [adApiLoader, setAdApiLoader] = useState(false);

  const getBankValue = () => {
    setAdApiLoader(true); // Start loader
    get(
      ApiEndpoints.GET_BANK_CREDIT_REQ,
      `page=1&paginate=10&role=Ad&platform=WEB&export=`,
      setAdApiLoader,
      (res) => {
        const adArray = res.data.data.banks;
        setBanks(adArray || []); 
        setFilteredBanks(adArray || []); 
      },
      (error) => {
        apiErrorToast(error);
        setBanks([]); // Set banks to an empty array on error
        setFilteredBanks([]); // Clear filteredBanks on error
      }
    );
  };

  useEffect(() => {
    getBankValue();
  }, []);

  // Update filteredBanks when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBanks(banks); // Reset to all banks if searchQuery is empty
    } else {
      const filtered = banks.filter((bank) =>
        bank.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBanks(filtered);
    }
  }, [searchQuery, banks]);

  return (
    <Box sx={{ padding: "16px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Bank List
        </Typography>
        <TextField
            variant="standard"
          placeholder="Search by bank name"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "300px" }}
        />
      </Grid>

      <Grid container spacing={2}>
        {filteredBanks.length > 0 ? (
          filteredBanks.map((bank, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {bank.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {bank.ifscGlobal}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{ color: "textSecondary", textAlign: "center", width: "100%" }}
          >
            No banks available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default BankList;
