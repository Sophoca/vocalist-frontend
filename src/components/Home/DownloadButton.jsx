import * as React from 'react';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { ArrowDropDown, Android, Apple } from '@mui/icons-material';

import WhiteButton from 'components/WhiteButton';

export default function DownloadButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <WhiteButton
        aria-controls={open ? 'split-button-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-label="select merge strategy"
        aria-haspopup="menu"
        ref={anchorRef}
        onClick={handleToggle}
      >
        Download
        <ArrowDropDown />
      </WhiteButton>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              marginTop: '5px',
              padding: '0 5px'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  <MenuItem
                    onClick={() =>
                      window.open('https://kr.object.ncloudstorage.com/vloom-android/vloom.apk')
                    }
                  >
                    <ListItemIcon>
                      <Android fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Android</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => window.open('https://testflight.apple.com/join/TmcfoaNs')}
                  >
                    <ListItemIcon>
                      <Apple fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>iOS</ListItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
