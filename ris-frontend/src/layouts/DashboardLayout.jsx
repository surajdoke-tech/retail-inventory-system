import { Box } from "@mui/material";

function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          height: "95.5vh",
          backgroundColor: "#1e293b",
          color: "white",
          p: 2
        }}
      >
        Sidebar
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>

    </Box>
  );
}

export default DashboardLayout;