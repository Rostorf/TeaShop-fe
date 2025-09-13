import { NavLink, useNavigate } from 'react-router-dom'
import '../../style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Dropdown } from "antd";
import { avatarDropdown, notLoginDropdown} from './DropdownItems/DropDownItems';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token);
  }, [])

  const navigate = useNavigate();

  const productDropdown = [
    {
      key: 'tra-trang',
      label: (
        <div onClick={() => navigate('whitetea')}>
          Trà trắng
        </div>
      ),
    },
    {
      key: 'tra-xanh',
      label: (
        <div onClick={() => navigate('greentea')}>
          Trà xanh
        </div>
      ),
    },
    {
      key: 'honey',
      label: (
        <div onClick={() => navigate('oolongtea')}>
          Trà Ô long
        </div>
      ),
    },
    {
      key: 'Hồng trà',
      label: (
        <div onClick={() => navigate('hongtra')}>
          Hồng trà
        </div>
      ),
    },
  ];

  const handleMenuClick = ({key}) => {
    switch (key) {
      case 'login':
        navigate("/auth/login");
        break;
      case 'register':
        navigate("/auth/register");
        break;
      //avatar
      case 'logout':
        handleLogout();
        break;
      case 'profile':
        navigate("/profile");
        break;
      case 'orders':
        navigate("/orders");
        break;
    }
  }

  const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("role");
        localStorage.removeItem("userId");
        alert("Bạn đã đăng xuất");
        setIsLoggedIn(false);
        navigate("/Auth/login");
    };


  return (
    <div className="w-full absolute top-0 left-0 z-50">
      <div className="navbar-bottom flex items-center justify-between h-[55px] w-full px-4 md:px-8 lg:px-16 z-50 bg-[#292929] fixed">
        <nav className="flex items-center gap-6 md:gap-8 lg:gap-10 pl-[200px]">
          <NavLink to='/' className="text-sm text-white font-inter font-bold capitalize hover:text-green-300 transition-colors">
            Trang chủ
          </NavLink> 
          <NavLink to='/about' className="text-sm text-white font-inter font-bold capitalize hover:text-green-300 transition-colors">
            Về chúng tôi
          </NavLink>
          <Dropdown className="text-sm text-white font-inter font-bold capitalize hover:text-green-300 transition-colors cursor-pointer" menu =
            {{ items: productDropdown}} trigger={['hover']} placement="bottom">
              <a onClick={(e) => { e.preventDefault();
                                navigate("/products")}}>Sản phẩm</a>
          </Dropdown>
          <NavLink to='/accessories' className="text-sm text-white font-inter font-bold capitalize hover:text-green-300 transition-colors">
            Phụ kiện
          </NavLink>
        </nav>
        
        <div className='flex items-center pr-[325px] gap-4 md:gap-6 lg:gap-8'>
          <button className='text-white hover:text-green-300 transition-colors' aria-label="Search">
            <SearchIcon/>
          </button>

          <div className='w-10 h-10 rounded-full flex justify-center items-center relative'>        
          <button className="text-white hover:text-green-300 transition-colors" aria-label="Shopping cart">
            <ShoppingCartIcon/>
          </button>
          <span className='absolute top-2/3 left-1/2 bg-red-500 text-white text-sm w-4 h-4 rounded-full flex justify-center items-center'></span>
          </div>

          <div className="profile">
            {isLoggedIn ? (
                <div className="profile-container">
                    <div className="profile-icon">
                        <Dropdown className='text-white hover:text-green-300 transition-colors' aria-label="User profile" menu={{ items: avatarDropdown, onClick: handleMenuClick}} trigger={['hover']}>
                            <a onClick={e => e.preventDefault()} className="no-effect">
                                <PersonIcon/>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            ) : (
                <div className="profile-container">
                    <div className="profile-icon">
                        <Dropdown className='text-white hover:text-green-300 transition-colors' aria-label="User profile" menu={{ items: notLoginDropdown, onClick: handleMenuClick}} trigger={['hover']}>
                            <a onClick={e => e.preventDefault()} className="no-effect">
                                <PersonIcon/>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            )}
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Navbar