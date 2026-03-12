import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@mui/material";

function Products() {

  const products = [
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

      <Paper>

        <Table>

          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

      </Paper>

    </Box>
  );
}

export default Products;