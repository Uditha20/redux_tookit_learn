import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Appbar from "../components/Appbar";
import { Outlet } from "react-router-dom";
import Product from "./Product";

function Dashboard() {
  return (
    <Box>
      <Appbar />
      <Product />
    </Box>
  );
}

export default Dashboard;
