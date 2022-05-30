import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MessageIcon from '@mui/icons-material/Message';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Message from './subpage/message';
import Home from './subpage/home';
import Profile from './subpage/Profile';
import Project from './subpage/project';
import Analatics from './subpage/analatics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Accounting from './subpage/accounting';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dashboard=()=>{
    navigate("/dashboard/")
  }
  const profile=()=>{
    navigate("/dashboard/profile")
  }
  const analatics=()=>{
    navigate("/dashboard/analatics")
  }
  const message=()=>{
    navigate("/dashboard/message")
  }
  const projects=()=>{
    navigate("/dashboard/project")
  }
  const accounting=()=>{
    navigate("/dashboard/accounting")
  }
  const icon = [<DashboardIcon />,<PersonIcon />,<AnalyticsIcon />,<AccountBalanceWalletIcon />,<MessageIcon />,<AppRegistrationIcon />]
  const click =[dashboard,profile,analatics,accounting,message,projects]
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Dashboard', 'Profile', 'Analatics', 'Accounting','Message','Project'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={click[index]}>
              <ListItemIcon>
                {icon[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Setting',"Info"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
         
        }}
      >
        <Toolbar>
          <IconButton
          
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className='d-flex'>

            <div className='rounded-circle px-3'><AccountCircleIcon /></div>
            {location.state}
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/message" element={<Message />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/project" element={<Project />} />
    <Route path="/analatics" element={<Analatics />} />
    <Route path="/accounting" element={<Accounting />} />
  </Routes>
        </Typography>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
