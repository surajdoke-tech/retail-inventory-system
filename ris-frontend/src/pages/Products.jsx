import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Products() {

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    stock: ""
  });
  const [products, setProducts] = useState([
    { id: 1, name: "Wall Tiles", brand: "Kajaria", category: "natural stone", stock: 120 },
    { id: 2, name: "Floor Tiles", brand: "Somany", category: "porcelain", stock: 80 },
    { id: 3, name: "Bathroom Tiles", brand: "Johnson", category: "vitrified", stock: 50 }
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {

    if (editId) {

      const updatedProducts = products.map((product) =>
        product.id === editId
          ? { ...product, ...formData }
          : product
      );

      setProducts(updatedProducts);

    } else {

      const newProduct = {
        id: products.length + 1,
        ...formData
      };

      setProducts([...products, newProduct]);

    }

    setEditId(null);
    setFormData({
      name: "",
      brand: "",
      category: "",
      stock: ""
    });

    handleClose();
  };

  const handleEdit = (product) => {

    setFormData({
      name: product.name,
      brand: product.brand,
      category: product.category,
      stock: product.stock
    });

    setEditId(product.id);

    setOpen(true);
  };

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
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>

          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
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

        <Button variant="contained" onClick={handleOpen}>
          Add Product
        </Button>
      </Box>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>


      {/* Dialog Box */}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" >

        <DialogTitle>Add Product</DialogTitle>

        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>

          <TextField sx={{ mt: 3 }}
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            fullWidth
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>

      </Dialog>

    </Box>
  );
}

export default Products;