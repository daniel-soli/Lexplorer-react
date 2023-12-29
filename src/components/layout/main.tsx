'use client'

import { useState } from "react"
import { AppBar, Avatar, Box, Drawer, FormControl, IconButton, InputAdornment, InputBase, InputLabel, List, OutlinedInput, TextField, Toolbar, Typography, alpha, styled } from "@mui/material";
import FooterComponent from "./Footer";
import { mainListItems } from "./listItems";
import { isMobile } from "react-device-detect";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function MainLayout({ children }: { children: React.ReactNode }, props: Props) {
    const [drawerWidth, setDrawerWidth] = useState(240);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const { window } = props;

    const handleDrawerToggle = (type: string) => {
      if (isMobile){
          setMobileOpen(!mobileOpen);
      }
    };

    const handleSearch = async () => {
      // DO THE SEARCH
    }

    const onKeyDown = async (e: any) => {
        if (e.key === "Enter") {
            // SEARCH
        }
        
    };

    const items = <List component="nav">
        {mainListItems}
    </List>;
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = isMobile ? (
        <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor='bottom'
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            display: { xs: 'block', sm: 'none', width: 'auto', height: 'auto',  },
            '& .MuiDrawer-paper': 
                { 
                    backgroundImage: 'none',
                    boxSizing: 'border-box', 
                    backgroundColor: 'transparent',
                    bottom: 0,
                },
        }}
        >
            <Box sx={{mb: ['48px', '56px', '64px'], backgroundColor: 'transparent'}}></Box>
            {items}
        </Drawer>
    )
    : (
      <Drawer
          variant="permanent"
          anchor="left"
          sx={{
              flexShrink: 0,
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': 
                  { 
                      boxSizing: 'border-box', 
                      width: drawerWidth,
                      height: 'auto',
                      bottom: 0,
                  },
          }}
          open
          >
              <Box sx={{ flexGrow: 0, mt: 3, mb: 3, ml:1, display: { xs: 'none', md: 'flex' } }}>
                {/* TODO: ADD LOGO */}
                  <Avatar alt="Lexplorer" src="/static/images/logo-192x192.png" />
                  <Typography variant="h6" sx={{letterSpacing: '.2rem', mt: 1, ml: 2}}>
                      Lexplorer.io
                  </Typography>
              </Box>
              {items}
      </Drawer>
    );

    const searchBar = (
      <FormControl variant="outlined" sx={{mt:1}}>
        <TextField
        type='text'
        name='search'
        label="Search"
        value={searchText}
        placeholder='Search nftId, account, token etc...'
        onChange={(value) => setSearchText(value.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={(e) => setSearchText("")}>
                  <ClearIcon />
              </IconButton>
              <IconButton
                  aria-label="search"
                  onClick={(e) => handleSearch()}
                  onMouseDown={(e) => handleSearch()}
                  edge="end">
                  <SearchIcon/>
              </IconButton>
          </InputAdornment>
          ),
        }}
        >

        </TextField>
    </FormControl>
    )

    const appbar = isMobile ? (
      <AppBar position="fixed" sx={{ display: { xs: 'block', sm: 'none' }, mb: 3, zIndex: 2000, }}>
        <Toolbar sx={{ backgroundColor: 'background.paper', justifyContent: 'space-between' }}>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => handleDrawerToggle('')}
          sx={{ mr: 2, display: { sm: 'none' } }}
          >
              <MenuIcon />
          </IconButton>
          {searchBar}
        </Toolbar>
      </AppBar>
      ) : (
      <AppBar position="fixed" elevation={0} sx={{ display: {xs: 'none', sm: 'block'}, zIndex: 2000, width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar sx={{ backgroundColor: 'background.default', justifyContent: 'space-between' }}>
            {searchBar}
          </Toolbar>
      </AppBar>
    );

    return (
        <>
          {appbar}
          {drawer}
          <Box
              component="main"
              sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: { sm: `${drawerWidth}px` },
              mt: ['48px', '56px', '64px'],
              mb: 15,
              p: 2,
              width: { sm: `calc(100% - ${drawerWidth}px)` }
              }}
          >
              {children}
              
          </Box>
          <FooterComponent drawerwidth={drawerWidth}/>
        </>
    )
}