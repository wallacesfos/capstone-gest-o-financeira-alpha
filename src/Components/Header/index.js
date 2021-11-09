import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { AccountCircle } from "@material-ui/icons";
  import { HeaderContainer, LinksContainer, UserIconContainer } from "./styles";
  import Menu from "@material-ui/core/Menu";
  import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
  import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
  import { withStyles } from "@material-ui/styles";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      height: "18vh",
      width: "60vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-around",
      right: "13",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));
  
  export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <HeaderContainer>
        <AppBar position="static">
          <Toolbar>
            <HomeRoundedIcon size="large" />
            <LinksContainer>
              <Typography variant="h6">Mensal</Typography>
  
              <Typography variant="h6">Anual</Typography>
  
              <Typography variant="h6">Finanças</Typography>
            </LinksContainer>
  
            <UserIconContainer>
              <p>Olá, User!</p>
  
              <AccountCircle />
            </UserIconContainer>
  
            <div className="MenuMobile">
              <MenuRoundedIcon onClick={handleClick} />
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Typography variant="h6">Mensal</Typography>
  
                <Typography variant="h6">Anual</Typography>
  
                <Typography variant="h6">Finanças</Typography>
              </StyledMenu>
            </div>
          </Toolbar>
        </AppBar>
      </HeaderContainer>
    );
  };