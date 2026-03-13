import { Box, Typography, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Products() {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", flex: 1 },
    { field: "brand", headerName: "Brand", flex: 1 },
    { field: "stock", headerName: "Stock", width: 120 },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: () => (
        <>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>

          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
  ];

  const rows = [
    { id: 1, name: "Wall Tiles", brand: "Kajaria", stock: 120 },
    { id: 2, name: "Floor Tiles", brand: "Somany", stock: 80 },
    { id: 3, name: "Bathroom Tiles", brand: "Johnson", stock: 50 }
  ];

  return (
    <Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2
        }}
      >
        <Typography variant="h5">
          Products
        </Typography>

        <Button variant="contained">
          Add Product
        </Button>
      </Box>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>

    </Box>
  );
}

export default Products;