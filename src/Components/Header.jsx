import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Logo from "./Images/lmv.png";
import { Box } from "@mui/system";
import DrawerComp from "./drawerComp";

const Header = ({ links }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ backgroundColor: "rgb(216,225,236)" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <DrawerComp links={links} />
            <Typography>
              <Grid item xs={3} sx={{ width: "180px", paddingTop: "2px" }}>
                <img
                  style={{ width: "100%" }}
                  src={Logo}
                  alt="Not displaying"
                />
              </Grid>
            </Typography>
          </>
        ) : (
          <Grid container>
            <Grid item xs={3}>
              <img
                style={{ width: "200px", paddingTop: "2px" }}
                src={Logo}
                alt="Not displaying"
              />
            </Grid>

            <Grid item xs={7} sx={{ paddingTop: "15px" }}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab sx={{ color: "black" }} key={index} label={link} />
                ))}
              </Tabs>
            </Grid>

            <Grid item xs={2} sx={{ paddingTop: "15px" }}>
              <Box>
                <Button variant="contained">signin</Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
