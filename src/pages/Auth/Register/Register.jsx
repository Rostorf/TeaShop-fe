import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import axiosSystem from '../../../api/axiosSystem.jsx';

function Register() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    fullName: "",
    address: "",
    phone: "",
    role: "user"
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Tên đăng nhập không được để trống";
    } else if (formData.username.length < 3) {
      newErrors.username = "Tên đăng nhập phải có ít nhất 3 ký tự";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email không hợp lệ";
      }
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Họ tên không được để trống";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
    
    if (errors[name]) {setErrors({...errors, [name]: ""});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const { confirmPassword:_ , ...userData } = formData;
      
      const res = await axiosSystem.post('/api/User/CreateUser', userData);
      
      if (res && res.data) {
        if (res.data.userId || res.data.id || res.status === 200 || res.status === 201) {
          alert("Đăng ký thành công! Vui lòng đăng nhập.");
          navigate("/auth/login");
          return;
        }
      }
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      navigate("/auth/login");
      
    } catch (error) {
      console.error('Xảy ra lỗi', error);
      
      let errorMessage = "Đăng ký thất bại. Vui lòng thử lại.";
      
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.status === 409) {
          errorMessage = "Tên đăng nhập hoặc email đã tồn tại.";
        } else if (error.response.status >= 500) {
          errorMessage = "Lỗi máy chủ. Vui lòng thử lại sau.";
        }
      } else if (error.request) {
        errorMessage = "Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.";
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className='lg:container mx-auto py-[150px]'>
      
      <div className='items-center justify-center max-w-[648px] w-full min-h-[382px] mx-auto p-[31px] rounded-lg border-[1px] border-[#9a9caa]'>
        <h3 className='text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize items-center justify-center flex'>Đăng ký</h3>

        <form onSubmit={handleSubmit} className='flex flex-col items-center w-full space-y-4'>
            <div className='w-full'>
              <input type="text" name="username"ref={inputRef} placeholder='Tên đăng ký' value={formData.username} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            
            <div className='w-full'>
              <input type="email" name="email"placeholder='Email' value={formData.email} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className='w-full'>
              <input type="text" name="fullName"placeholder='Họ và tên' value={formData.fullName} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            
            <div className='w-full'>
              <input type="text" name="address"placeholder='Địa chỉ' value={formData.address} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
            </div>
            
            <div className='w-full'>
              <input type="tel" name="phone"placeholder='Số điện thoại' value={formData.phone} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
            </div>
            
            <div className='w-full'>
              <input type="password" name="password" placeholder='Mật khẩu' value={formData.password} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            
            <div className='w-full'>
              <input type="password" name="confirmPassword" placeholder='Xác thực lại mật khẩu' value={formData.confirmPassword} onChange={handleChange}
                className='w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 border border-transparent focus:border-[#007580] focus:outline-none'/>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
            
            <button type="submit" disabled={isSubmitting}
              className='w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-1 cursor-pointer hover:bg-[#006570] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'>
              {isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
              <ArrowRightAltIcon/>
            </button>
        </form>
        
        <p className='text-base text[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4'>
          Đã có tài khoản? 
          <Link to={'/auth/login'} className='text-[#007580] hover:underline' >Đăng nhập</Link>
        </p>
      </div>
    </div>
  )
}

export default Register