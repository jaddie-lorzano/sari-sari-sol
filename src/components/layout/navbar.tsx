import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StorefrontIcon from "@mui/icons-material/Storefront";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <StorefrontIcon />
          <Typography display={{ xs: 'none', md: 'block' }}>Sari-sari SOL</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
