import React, { Component } from "react";

import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";

class Register extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Regesteration Form</Typography>
        <Paper elevation={3}>
          <Box component="form" noValidate autoComplete="off" padding={2}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="outlined"
              type="email"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <TextField
              id="filled-basic"
              label="ReType Password"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="operator">Operator</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" fullWidth style={{ marginTop: "10px" }}>
              Register
            </Button>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Register;