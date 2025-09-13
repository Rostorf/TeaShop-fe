import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosSystem from '../../../api/axiosSystem.jsx';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
        const username = localStorage.getItem("token");
        if (username) {
            navigate("home");
        }
    }, [navigate]);

  const handleValidate = () => {
        if (!username.trim()) {
            alert("Tên tài khoản không được để trống");
            return false;
        }
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
            alert("Tên tài khoản không hợp lệ");
            return false;
        }
        if (!password) {
            alert("Password không được để trống");
            return false;
        }
        return true;
  }

  const handleLogin = async (e) => {
        e.preventDefault();
        if (!handleValidate()) return;

        try {
            const res = await axiosSystem.post('api/User/Login', {username, password});

            if (res.user.userId) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("userId", res.user.userId);
                localStorage.setItem("username", res.user.username);
                localStorage.setItem("password", res.user.password);
                localStorage.setItem("role", res.user.role);
                navigate("/home");
            }
            else {
                alert("Khong tim thay thong tin user");
            }
        }
        catch (error) {
            console.log('Đăng nhập xảy ra lỗi',error);
            alert("Sai tên đăng nhập hoặc mật khẩu");
        }
    }

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className='lg:container mx-auto py-[190px]'>

      <div className='items-center justify-center max-w-[648px] w-full min-h-[292px] mx-auto p-[31px] rounded-lg border-[1px] border-[#9a9caa] bg-white'>
        <h3 className='text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize items-center justify-center flex'>Đăng nhập</h3>

        <form action="#" className='flex flex-col items-center w-full space-y-4' onSubmit={handleLogin}>
          <input required type="text" ref={inputRef} onChange={(e) => setUsername(e.target.value)} placeholder='Tên đăng nhập' 
          className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>

          <input required type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Mật khẩu' 
          className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>

          <button type="submit" onClick={handleLogin} 
          className='w-full h-[50px] bg-[#007580] rounded-lg text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-1 cursor-pointer hover:bg-[#006570] transition-colors'>
            Đăng nhập <ArrowRightAltIcon />
          </button>
        </form>
        
        <p className='text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4'>
          Chưa có tài khoản? 
          <Link to={'/auth/register'} className='text-[#007580] hover:underline'>Đăng ký ngay</Link>
        </p>
        
      </div>
    </div>
  );
}

export default Login;