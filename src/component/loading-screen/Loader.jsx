import { Box } from "@mui/material";
import { smLogo } from "../../iconsImports"; // Ensure this path is correct

const Loader = ({ loading, children, changeloder }) => {
  return (
    <div>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            background: "rgba(0, 0, 0, 0.5)", // Darker background with a hint of transparency
            zIndex: 9998,
            flexDirection: "column",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div className="loader-container">
            {/* Loader Ring */}
            <div className="loader-ring">
              <div className="inner-ring"></div>
              {/* Insert the logo inside the circle */}
              {!changeloder && (
                <img
                  src={smLogo}
                  style={{
                    position: "absolute",
                    width: 100, // Adjusted size of the logo
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "contain",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                  }}
                  alt="Loading..."
                />
              )}
            </div>
          </div>
          <p className="loading-text">
            Just a moment! We're preparing your request...
          </p>
        </Box>
      )}
      {children}
      <style jsx>{`
        .loader-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .loader-ring {
          position: relative;
          width: 160px; /* Increased circle size */
          height: 160px;
          border-radius: 50%;
          border: 6px solid transparent;
          border-top: 6px solid #d1aa65;
          border-bottom: 6px solid #000;
          animation: pulseRing 1.5s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inner-ring {
          position: absolute;
          width: 130px; /* Increased size */
          height: 130px;
          border-radius: 50%;
          border: 4px solid #ffffff;
          animation: rotateRing 1.5s linear infinite;
        }

        @keyframes rotateRing {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }

        .loading-text {
          margin-top: 18px;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          text-transform: uppercase;
          animation: fadeIn 2s ease-in-out infinite alternate;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
