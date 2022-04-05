import React from 'react';
import { Link,withRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import LogoWhite from "../components/image/LogoWhite.png";
import Header from '../components/HeaderComponent'
import Background from '../components/image/background.png'
import Button from '@mui/material/Button';
import { pink} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import './css/firstPage.css';
function FirstPage() {
    const imagestyle = {
             height:200,
             width:180,
            };
    const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText("#ffffff"),
      backgroundColor: "#ffffff",
      '&:hover': {
        backgroundColor: pink[100],
      },
    }));

    return (
        <div className="background">
            <div className="logo">
                <img src={LogoWhite} alt="logowhite" style={imagestyle}/>
            </div>
            <div className="font">더욱 더 쉬워진 프로젝트를 <br/>
             경험해보세요
             </div>
                <div className="button">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <ColorButton variant="contained" size="large">
                            <div className="smallfont">로그인</div>
                        </ColorButton>
                    </Link>
                </div>
        </div>




    );
}

export default withRouter(FirstPage);