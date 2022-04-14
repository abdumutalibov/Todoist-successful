import "./topbar.css";
import menu from "../../assets/images/menu.png";
import home from "../../assets/images/home.png";
import {
  AiOutlineQuestionCircle,
  AiOutlineBell,
  AiOutlineRise,
  AiOutlinePlus,
} from "react-icons/ai";

const TopNav = () => {
  return (
    <div className="Topbar">
      <div className="topbarLeft">
        <div className="menu-icon">
          <div className="menu-hover">
            <img className="menu" src={menu} alt="" />
          </div>
          <div>
            <img className="home" src={home} alt="" />
          </div>
          <div className="topbarCenter">
            <input
              className="headerInput "
              type="text"
            //   autocomplete="text"
              placeholder="Поиск"
            />
          </div>
        </div>
      </div>
      <div className='topbarRight'>
    <div className='topbarIcons'>
    <div className='topbarIconItem'> <AiOutlinePlus/>
        </div>
    <div className='topbarIconItem'> <AiOutlineRise/>
        <span className='topbarIconBadge'>0/5</span>
        </div>
   
        <div className='topbarIconItem'> <AiOutlineQuestionCircle/>
        </div>
        <div className='topbarIconItem'> <AiOutlineBell/>
        </div>
       
    </div>
    </div>
    </div>
  );
};

export default TopNav;
