import { 
  Box, List, ListItemButton, ListItemIcon, ListItemText,
  Typography, AppBar, Toolbar, IconButton, Avatar
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import NotificationsIcon from "@mui/icons-material/Notifications";

function DashboardLayout({ children }) {

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Products", icon: <InventoryIcon /> },
    { text: "Categories", icon: <CategoryIcon /> },
    { text: "Brands", icon: <BrandingWatermarkIcon /> }
  ];

  return (
    <Box sx={{ display: "flex" }}>

      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          height: "95.5vh",
          backgroundColor: "#0f172a",
          color: "white",
          p: 2
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Retail Admin
        </Typography>

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index} sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      

      {/* Main Section */}
      <Box sx={{ width: '82.3vw' }}>

        {/* Top Navbar */}
        <AppBar position="static" color="inherit" elevation={1}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            
            <Typography variant="h6">
              Dashboard
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>

              <Avatar sx={{ width: 32, height: 32 }}>
                S
              </Avatar>
            </Box>

          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          {children}
        </Box>

      </Box>

    </Box>
  );
}

export default DashboardLayout;