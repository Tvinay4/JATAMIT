import React, { useContext, useState } from "react";
import {
  Box,
  Modal,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Switch,
  styled,
  Tooltip,
  Drawer,
  Button,
} from "@mui/material";
import ModalHeader from "./ModalHeader";
import ApiEndpoints from "../network/ApiEndPoints";
import Loader from "../component/loading-screen/Loader";
import { postJsonData } from "../network/ApiController";
import { apiErrorToast } from "../utils/ToastUtil";
import setting from "../assets/setting.png";
import useCommonContext from "../store/CommonContext";
import AuthContext from "../store/AuthContext";
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SettingsIcon from "@mui/icons-material/Settings";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  fontFamily: "Poppins",
  height: "max-content",
  overflowY: "scroll",
  p: 2,
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transitionDuration: "300ms",
    "& + .MuiSwitch-track": {
      backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#ff0000",
      opacity: 1,
      border: 0,
      content: '""',
    },
    "&.Mui-checked": {
      transform: "translateX(17px)",
      bgcolor: "#FFF",

      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#49c949",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#fff",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 28,
    height: 28,
    position: "relative", // Ensure correct positioning of the text
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:before": {
      content: '"off"', // Default 'off' text
      position: "absolute",
      // Red color text when unchecked
      fontSize: "12px",
      color: "#000000",
      fontWeight: "bold",
    },
  },
  "& .Mui-checked .MuiSwitch-thumb:before": {
    content: '"on"', // Change to 'on' text when checked
    position: "absolute",
    color: "#000000", // Green color text when checked
    fontSize: "12px",
    fontWeight: "bold",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const UserServiceSetting = ({ row, refresh }) => {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState(false);
  // const [switchVal, setSwitchVal] = useState();
  // const [paramVal, setParamVal] = useState("");
  // const [servicesData, setservicesData] = useState();
  const [allServices, setAllServices] = useState([]);
  const [adminAllServices, setAdminAllServices] = useState([]);
  const authCtx = useContext(AuthContext);
  const { getRecentData, refreshUser, userRequest } = useCommonContext();
  const user = authCtx.user;
  // console.log("servicesData", servicesData);
const [openCustomer,setCustomer]=useState(true)
const [openAdmin,setAdmin]=useState(false)
  const handleOpen = () => {
    getServices();
  };

  const handleClose = () => {
    refreshUser();
    setOpen(false);
  };
  const handleCustomer = () => {
    setCustomer(!openCustomer);
    setAdmin(false);
  };
  
  const handleAdmin = () => {
    setAdmin(!openAdmin);
    setCustomer(false);
  };
  const getServices = () => {
    postJsonData(
      ApiEndpoints.USER_SERVICES,
      { id: row.id },
      setRequest,
      (res) => {
        const servicesData = res?.data?.data;
        setOpen(true);
        // setservicesData();
        refreshUser();
        const customer = [
          {
            name: "Domestic Money Transfer 1",
            value: servicesData.dmt1,
            param: "dmt1",
          },
          {
            name: "Domestic Money Transfer 2",
            value: servicesData.dmt2,
            param: "dmt2",
          },
          { name: "Account Ledger", value: servicesData.acst, param: "acst" },
          {
            name: "Express Transfer",
            value: servicesData.dmt4,
            param: "dmt4",
          },
          { name: "AEPS", value: servicesData.aeps, param: "aeps" },
          { name: "Super Transfer", value: servicesData.st, param: "st" },
          { name: "BBPS", value: servicesData.bbps, param: "bbps" },
          {
            name: "Nepal Transfer",
            value: servicesData.nepal_transfer,
            param: "nepal_transfer",
          },
          { name: "UPI QR code", value: servicesData.upi_qr, param: "upi_qr" },
          {
            name: "UPI Transfer",
            value: servicesData.upi_transfer,
            param: "upi_transfer",
          },
          {
            name: "Recharge",
            value: servicesData.recharge,
            param: "recharge",
          },
          {
            name: "Wallet Transfer",
            value: servicesData.wallet_transfer,
            param: "wallet_transfer",
          },
          {
            name: "Payment Gateway",
            value: servicesData.pg,
            param: "pg",
          },
          {
            name: "Flight",
            value: servicesData.ft,
            param: "ft",
          },
        ];
  
        // Admin services array (only available for user.id === 1)
        const admin = [
          {
            name: "Dashboard",
            value: servicesData.dashboard,
            param: "dashboard",
          },
         {
            name: "Fund Request",
            value: servicesData.c_req,
            param: "c_req",
          },
         {
            name: "Transactions",
            value: servicesData.transactions,
            param: "transactions",
          },
          // {
          //   name: "Dashboard",
          //   value: servicesData.dashboard,
          //   param: "dashboard",
          // },
          // {
          //   name: "Complaint",
          //   value: servicesData.complaints,
          //   param: "complaints",
          // },
         {
            name: "Users",
            value: servicesData.users,
            param: "users",
          },
         {
            name: "Banking",
            value: servicesData.banking,
            param: "banking",
          },
         {
            name: "Messages",
            value: servicesData.messages,
            param: "messages",
          },
         {
            name: "Services",
            value: servicesData.services,
            param: "services",
          },
         {
            name: "Sett. Accounts",
            value: servicesData.s_accounts,
            param: "s_accounts",
          },
         {
            name: "Scheme",
            value: servicesData.scheme,
            param: "scheme",
          },
         {
            name: "Users Actions",
            value: servicesData.users_actions,
            param: "users_actions",
          },
         {
            name: "Transactions Actions",
            value: servicesData.txn_actions,
            param: "txn_actions",
          },

        ];
        // let services = [
        //   {
        //     name: "Domestic Money  Transfer 1",
        //     value: servicesData.dmt1,
        //     param: "dmt1",
        //   },
        //   {
        //     name: "Domestic Money  Transfer 2",
        //     value: servicesData.dmt2,
        //     param: "dmt2",
        //   },
        //   { name: "Account Ledger", value: servicesData.acst, param: "acst" },
        //   {
        //     name: "Express Money Transfer",
        //     value: servicesData.dmt4,
        //     param: "dmt4",
        //   },
        //   { name: "AEPS", value: servicesData.aeps, param: "aeps" },
        //   { name: "Super Transfer", value: servicesData.st, param: "st" },
        //   { name: "BBPS", value: servicesData.bbps, param: "bbps" },
        //   {
        //     name: "Nepal Transfer",
        //     value: servicesData.nepal_transfer,
        //     param: "nepal_transfer",
        //   },
        //   { name: "UPI QR code", value: servicesData.upi_qr, param: "upi_qr" },
        //   {
        //     name: "UPI Transfer",
        //     value: servicesData.upi_transfer,
        //     param: "upi_transfer",
        //   },
        //   {
        //     name: "Recharge",
        //     value: servicesData.recharge,
        //     param: "recharge",
        //   },
        //   {
        //     name: "Wallet Transfer",
        //     value: servicesData.wallet_transfer,
        //     param: "wallet_transfer",
        //   },
        //   {
        //     name: "Payment Gateway",
        //     value: servicesData.pg,
        //     param: "pg",
        //   },
        //   {
        //     name: "Flight",
        //     value: servicesData.ft,
        //     param: "ft",
        //   },
        //   user.id === 1 && {
        //     name: "Sett. Accounts",
        //     value: servicesData.risk,
        //     param: "risk",
        //   },
        //   user.id === 1 && {
        //     name: "Virtual Account",
        //     value: servicesData.v_account,
        //     param: "v_account",
        //   },
        //   user.id === 1 && {
        //     name: "Employees",
        //     value: servicesData.emp,
        //     param: "emp",
        //   },
        //   user.id === 1 && {
        //     name: "invoice",
        //     value: servicesData.invoice,
        //     param: "invoice",
        //   },
        //   user.id === 1 && {
        //     name: "Credit Request",
        //     value: servicesData.c_req,
        //     param: "c_req",
        //   },
        //   user.id === 1 && {
        //     name: "Transactions",
        //     value: servicesData.transactions,
        //     param: "transactions",
        //   },
        //   user.id === 1 && {
        //     name: "Users",
        //     value: servicesData.users,
        //     param: "users",
        //   },
        //   user.id === 1 && {
        //     name: "Banking",
        //     value: servicesData.banking,
        //     param: "banking",
        //   },
        //   user.id === 1 && {
        //     name: "Messages",
        //     value: servicesData.messages,
        //     param: "messages",
        //   },
        //   user.id === 1 && {
        //     name: "Services",
        //     value: servicesData.services,
        //     param: "services",
        //   },
        //   // user.id === 1 && {
        //   //   name: "Sett. Accounts",
        //   //   value: servicesData.s_accounts,
        //   //   param: "s_accounts",
        //   // },
        //   user.id === 1 && {
        //     name: "Scheme",
        //     value: servicesData.scheme,
        //     param: "scheme",
        //   },
        //   user.id === 1 && {
        //     name: "Users Actions",
        //     value: servicesData.user_actions,
        //     param: "user_actions",
        //   },
        //   user.id === 1 && {
        //     name: "Transactions Actions",
        //     value: servicesData.txn_actions,
        //     param: "txn_actions",
        //   },
        // ];
        setAllServices(customer);
        setAdminAllServices(admin)
      },
      (err) => {
        apiErrorToast(err);
      }
    );
  };

  // console.log("allservices", allServices);
  const changeSwitch = (paramVal, sVal) => {
    const data = { [paramVal]: sVal ? 1 : 0, id: row.id };

    postJsonData(
      ApiEndpoints.ADMIN_SERVICES,
      data,
      setRequest,
      (res) => {
        const servicesData = res?.data?.data;
        refreshUser();
        const customer = [
          {
            name: "Domestic Money Transfer 1",
            value: servicesData.dmt1,
            param: "dmt1",
          },
          {
            name: "Domestic Money Transfer 2",
            value: servicesData.dmt2,
            param: "dmt2",
          },
          { name: "Account Ledger", value: servicesData.acst, param: "acst" },
          {
            name: "Express Transfer",
            value: servicesData.dmt4,
            param: "dmt4",
          },
          { name: "AEPS", value: servicesData.aeps, param: "aeps" },
          { name: "Super Transfer", value: servicesData.st, param: "st" },
          { name: "BBPS", value: servicesData.bbps, param: "bbps" },
          {
            name: "Nepal Transfer",
            value: servicesData.nepal_transfer,
            param: "nepal_transfer",
          },
          { name: "UPI QR code", value: servicesData.upi_qr, param: "upi_qr" },
          {
            name: "UPI Transfer",
            value: servicesData.upi_transfer,
            param: "upi_transfer",
          },
          {
            name: "Recharge",
            value: servicesData.recharge,
            param: "recharge",
          },
          {
            name: "Wallet Transfer",
            value: servicesData.wallet_transfer,
            param: "wallet_transfer",
          },
          {
            name: "Payment Gateway",
            value: servicesData.pg,
            param: "pg",
          },
          {
            name: "Flight",
            value: servicesData.ft,
            param: "ft",
          },
        ];
  
        // Admin services array (only available for user.id === 1)
        const admin = [
          {
            name: "Dashboard",
            value: servicesData.dashboard,
            param: "dashboard",
          },
         {
            name: "Fund Request",
            value: servicesData.c_req,
            param: "c_req",
          },
        
         {
            name: "Transactions",
            value: servicesData.transactions,
            param: "transactions",
          },
          // {
          //   name: "Dashboard",
          //   value: servicesData.dashboard,
          //   param: "dashboard",
          // },
          // {
          //   name: "Complaint",
          //   value: servicesData.complaints,
          //   param: "complaints",
          // },
         {
            name: "Users",
            value: servicesData.users,
            param: "users",
          },
         {
            name: "Banking",
            value: servicesData.banking,
            param: "banking",
          },
         {
            name: "Messages",
            value: servicesData.messages,
            param: "messages",
          },
         {
            name: "Services",
            value: servicesData.services,
            param: "services",
          },
         {
            name: "Sett. Accounts",
            value: servicesData.s_accounts,
            param: "s_accounts",
          },
         {
            name: "Scheme",
            value: servicesData.scheme,
            param: "scheme",
          },
         {
            name: "Users Actions",
            value: servicesData.users_actions,
            param: "users_actions",
          },
         {
            name: "Transactions Actions",
            value: servicesData.txn_actions,
            param: "txn_actions",
          },

        ];
        // let services = [
        //   {
        //     name: "Domestic Money  Transfer 1",
        //     value: servicesData.dmt1,
        //     param: "dmt1",
        //   },
        //   {
        //     name: "Domestic Money  Transfer 2",
        //     value: servicesData.dmt2,
        //     param: "dmt2",
        //   },
        //   { name: "Account Ledger", value: servicesData.acst, param: "acst" },
        //   {
        //     name: "Express Money Transfer",
        //     value: servicesData.dmt4,
        //     param: "dmt4",
        //   },
        //   { name: "AEPS", value: servicesData.aeps, param: "aeps" },
        //   { name: "Super Transfer", value: servicesData.st, param: "st" },
        //   { name: "BBPS", value: servicesData.bbps, param: "bbps" },
        //   {
        //     name: "Nepal Transfer",
        //     value: servicesData.nepal_transfer,
        //     param: "nepal_transfer",
        //   },
        //   { name: "UPI QR code", value: servicesData.upi_qr, param: "upi_qr" },
        //   {
        //     name: "UPI Transfer",
        //     value: servicesData.upi_transfer,
        //     param: "upi_transfer",
        //   },
        //   {
        //     name: "Recharge",
        //     value: servicesData.recharge,
        //     param: "recharge",
        //   },
        //   {
        //     name: "Wallet Transfer",
        //     value: servicesData.wallet_transfer,
        //     param: "wallet_transfer",
        //   },
        //   {
        //     name: "Payment Gateway",
        //     value: servicesData.pg,
        //     param: "pg",
        //   },
        //   {
        //     name: "Flight",
        //     value: servicesData.ft,
        //     param: "ft",
        //   },
        //   user.id === 1 && {
        //     name: "Sett. Accounts",
        //     value: servicesData.risk,
        //     param: "risk",
        //   },
        //   user.id === 1 && {
        //     name: "Virtual Account",
        //     value: servicesData.v_account,
        //     param: "v_account",
        //   },
        //   user.id === 1 && {
        //     name: "Employees",
        //     value: servicesData.emp,
        //     param: "emp",
        //   },
        //   user.id === 1 && {
        //     name: "invoice",
        //     value: servicesData.invoice,
        //     param: "invoice",
        //   },
        //   user.id === 1 && {
        //     name: "Credit Request",
        //     value: servicesData.c_req,
        //     param: "c_req",
        //   },
        //   user.id === 1 && {
        //     name: "Transactions",
        //     value: servicesData.transactions,
        //     param: "transactions",
        //   },
        //   user.id === 1 && {
        //     name: "Users",
        //     value: servicesData.users,
        //     param: "users",
        //   },
        //   user.id === 1 && {
        //     name: "Banking",
        //     value: servicesData.banking,
        //     param: "banking",
        //   },
        //   user.id === 1 && {
        //     name: "Messages",
        //     value: servicesData.messages,
        //     param: "messages",
        //   },
        //   user.id === 1 && {
        //     name: "Services",
        //     value: servicesData.services,
        //     param: "services",
        //   },
        //   // user.id === 1 && {
        //   //   name: "Sett. Accounts",
        //   //   value: servicesData.s_accounts,
        //   //   param: "s_accounts",
        //   // },
        //   user.id === 1 && {
        //     name: "Scheme",
        //     value: servicesData.scheme,
        //     param: "scheme",
        //   },
        //   user.id === 1 && {
        //     name: "Users Actions",
        //     value: servicesData.user_actions,
        //     param: "user_actions",
        //   },
        //   user.id === 1 && {
        //     name: "Transactions Actions",
        //     value: servicesData.txn_actions,
        //     param: "txn_actions",
        //   },
        // ];
        setAllServices(customer);
        setAdminAllServices(admin)
      },
      (err) => {
        apiErrorToast(err);
      }
    );
  };

  // const changeSwitchVal = (e) => {
  //   if (e.target.checked) {
  //     setSwitchVal(1);
  //   } else {
  //     setSwitchVal(0);
  //   }
  //   setParamVal(param);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Tooltip title="Services">
        <IconButton onClick={handleOpen} size="small" sx={{ color: "#505050" }}>
          {request ? (
            <Loader loading={request} size={22} />
          ) : (
            <SettingsIcon alt="Settings"
            style={{ width: "24px", height: "24px" }} />
          )}
        </IconButton>
      </Tooltip>
      <Drawer
        open={open}
        anchor="right"
        onClose={handleClose}
        
      >
       <Box sx={{ width: 600,p:2 }}>
  <Loader loading={request} />
  <ModalHeader   title="User service setting"
            subtitle="Empower Your Experience: Manage User Service Settings with Ease!"
            handleClose={handleClose}/>

  <Grid container spacing={2}>
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {/* Customer Section */}
      <Button
            onClick={handleCustomer}
            endIcon={openCustomer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              justifyContent: "space-between",
              width: "98%",
              ml:1,
              fontSize:"16px",
              padding: "12px 16px",
              backgroundColor: openCustomer ? "#e0f7fa" : "#f0f0f0",
              color: "#0000ff",
              color: "#1877F2",
              // justifyContent:"center",
              borderRadius: "8px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: openCustomer ? "#b2ebf2" : "#e0e0e0",
              },
            }}
          >
            Customer Services
          </Button>

      {openCustomer && (
        <Grid container spacing={2} sx={{p:5}}>
          {allServices && allServices.length > 0 && allServices.map((item, index) => {
            if (!item) return null;
            return (
              <Grid item md={6} lg={6} sm={12} xs={12} key={index} >
                <ListItem sx={{alignItems: "center", borderBottom: "1px solid #ddd" }}>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: "16px",
                    }}
                  />
                  <ListItemAvatar>
                    <Grid>
                      <IOSSwitch
                        size="small"
                        sx={{
                          "&.MuiSwitch-root .MuiSwitch-switchBase": {
                            color: "#fff",
                          },
                          "&.MuiSwitch-root .Mui-checked": {
                            color: "#FFF",
                          },
                        }}
                        defaultChecked={item.value === 1 ? true : false}
                        onChange={(e) => changeSwitch(item.param, e.target.checked)}
                      />
                    </Grid>
                  </ListItemAvatar>
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
      )}
      
      <Divider sx={{ margin: "16px 0" }} /> {/* Divider between sections */}

      {/* Admin Section */}
   {user?.id===1&&
      <Button
        onClick={handleAdmin}
        endIcon={openAdmin ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          justifyContent: "space-between",
          width: "98%",
          fontSize:"16px",
          ml:1,
          padding: "12px 16px",
          backgroundColor: openCustomer ? "#e0f7fa" : "#f0f0f0",
          color: "#0000ff",
          color: "#1877F2",
          // justifyContent:"center",
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: openCustomer ? "#b2ebf2" : "#e0e0e0",
          },
        }} >
        Admin Services
      </Button>
}
      {openAdmin && (
        <Grid container spacing={2}>
          {adminAllServices && adminAllServices.length > 0 && adminAllServices.map((item, index) => {
            if (!item) return null;
            return (
              <Grid item md={6} lg={6} sm={12} xs={12} key={index}>
                <ListItem sx={{ px: 2, py: 1, alignItems: "center", borderBottom: "1px solid #ddd" }}>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: "16px",
                    }}
                  />
                  <ListItemAvatar>
                    <Grid>
                      <IOSSwitch
                        size="small"
                        sx={{
                          "&.MuiSwitch-root .MuiSwitch-switchBase": {
                            color: "#fff",
                          },
                          "&.MuiSwitch-root .Mui-checked": {
                            color: "#49af41",
                          },
                        }}
                        defaultChecked={item.value === 1 ? true : false}
                        onChange={(e) => changeSwitch(item.param, e.target.checked)}
                      />
                    </Grid>
                  </ListItemAvatar>
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
      )}
    </List>
  </Grid>
</Box>
      </Drawer>
    </Box>
  );
};
export default UserServiceSetting;
