import { Box, Typography, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ModalHeader = ({
  title = "Modal heading",
  subtitle = "Start your journey with JATMIT.",
  handleClose,
  hideCloseBtn,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "16px", md: "20px" },
        background: "linear-gradient(135deg, #8A40A5 0%, #F56C63 100%)",
        borderRadius: "12px 12px 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        mb: 2,
        boxShadow: "0 4px 12px rgba(138, 64, 165, 0.3)",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          letterSpacing: "0.5px",
          textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {title}
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.9)",
          marginTop: 1,
          textAlign: "center",
          fontSize: { xs: "0.875rem", md: "0.9375rem" },
          maxWidth: "80%",
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </Typography>

      {/* Close Button */}
      {!hideCloseBtn && (
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "14px",
            right: "14px",
            color: "#fff",
            backgroundColor: "rgba(255,255,255,0.2)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              transform: "rotate(90deg)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            width: "34px",
            height: "34px",
            backdropFilter: "blur(2px)",
          }}
          aria-label="close"
        >
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

export default ModalHeader;
