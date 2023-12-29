import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import GppGoodIcon from '@mui/icons-material/GppGood';
import MoneyIcon from '@mui/icons-material/Money';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import Link from 'next/link';
import { Divider } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <Divider />
    <ListItemButton component={Link} href='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component={Link} href='/blocks'>
      <ListItemIcon>
        <ViewAgendaIcon />
      </ListItemIcon>
      <ListItemText primary="Blocks" />
    </ListItemButton>
    <ListItemButton component={Link} href='/transactions'>
      <ListItemIcon>
        <SyncAltIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItemButton>
    <ListItemButton component={Link} href='/accounts'>
      <ListItemIcon>
        <GppGoodIcon />
      </ListItemIcon>
      <ListItemText primary="Accounts" />
    </ListItemButton>
    <ListItemButton  component={Link} href='/pairs'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pairs" />
    </ListItemButton>
    <ListItemButton component={Link} href='/tokens'>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Tokens" />
    </ListItemButton>
    <ListItemButton  component={Link} href='/nfts'>
      <ListItemIcon>
        <BurstModeIcon />
      </ListItemIcon>
      <ListItemText primary="NFTs" />
    </ListItemButton>
  </React.Fragment>
);