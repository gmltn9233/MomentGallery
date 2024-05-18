import React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

// 진한 고동색 정의
const darkGold = '#245987';

const theme = createTheme({
  palette: {
    primary: {
      main: darkGold,
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);



  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };


  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                  className='typo'
                  variant="h6"
                  noWrap
                  component={Link} // Change component to Link
                  to="/" // Specify the path for home
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textDecoration: 'none', color: 'inherit', marginLeft: '2rem', fontWeight: '600' }} // Add styles for Link
              >
                Moment Gallery
              </Typography>

              <div className='nav-list' style={{marginLeft: '1.5rem'}}>
                <ul>
                  <li>
                    <Link to='/painting' className='nav-item'>
                      Painting
                    </Link>
                  </li>
                  <li>
                    <Link to='/literature' className='nav-item'>
                      Generative AI
                    </Link>
                  </li>
                </ul>
              </div>
              {auth && (
                  <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="profile-menu-appbar"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        className='drop'
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                        id="profile-menu-appbar"
                        anchorEl={profileAnchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(profileAnchorEl)}
                        onClose={handleProfileMenuClose}
                        className='drop'
                    >
                      <Link to='/upload' className='upload'>
                        <MenuItem onClick={handleProfileMenuClose} style={{color: 'black'}}>Upload</MenuItem>
                      </Link>
                      <Link to='/profile' className='prof'>
                        <MenuItem onClick={handleProfileMenuClose} style={{color: 'black'}}>My Account</MenuItem>
                      </Link>
                    </Menu>
                  </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
  );
}