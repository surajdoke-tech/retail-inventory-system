import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

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

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>

    </Box>
  );
}

export default DashboardLayout;