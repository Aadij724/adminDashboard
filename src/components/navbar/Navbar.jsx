import "../navbar/Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import DarkThemeContext from "../../context/darkTheme/darkThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {

    const {darkTheme, updateTheme, setTheme} = useContext(DarkThemeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."></input>
                    <SearchIcon className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        {/* {
                            darkTheme
                            ? <LightModeIcon className="icon" onClick={()=>{updateTheme("toggle");}}/>
                            : <DarkModeOutlinedIcon className="icon" onClick={()=>{updateTheme("toggle");}}/>
                        }  */}
                        {
                            darkTheme
                            ? <LightModeIcon className="icon" onClick={()=>{setTheme((prev)=>!prev);}}/>
                            : <DarkModeOutlinedIcon className="icon" onClick={()=>{setTheme((prev)=>!prev);}}/>
                        } 
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className="icon"/>
                        <div className="red-box">2</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="red-box">1</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
