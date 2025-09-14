import "../../style.css";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../components/Images/logo.png';
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <footer className="bg-[#3f584d] text-white p-10 grid grid-cols-4 mt-auto">
            <aside>
                <img 
                    src={logo} 
                    alt="Logo" 
                    className='h-[135px] w-auto pt-2 mx-auto' 
                />
            </aside>
            <nav className="regulations">
                <h6 className="footer-title">Chính sách</h6>
                <div className="space-y-3">
                <a onClick={() => {navigate('/privacy');}} className="link link-hover hover:text-black transition-colors">Bảo mật thông tin</a>
                <br />
                <a onClick={() => {navigate('/delivery');}} className="link link-hover hover:text-black transition-colors">Chính sách giao hàng</a>
                <br />
                <a onClick={() => {navigate('/terms');}} className="link link-hover hover:text-black transition-colors">Điều khoản</a>
                </div>
            </nav>
            <nav className="">
                <h6 className="footer-title">Theo dõi chúng tôi</h6>
                    <a className="link link-hover hover:text-black transition-colors pr-2" href="https://www.facebook.com">
                        <FacebookIcon />
                    </a>
                    <a className="link link-hover hover:text-black transition-colors" href="https://www.instagram.com">
                        <InstagramIcon />
                    </a>
                    <a className="link link-hover hover:text-black transition-colors px-2" href="https://x.com/">
                        <TwitterIcon />
                    </a>
            </nav>
            <div>
             <h6 className="footer-title">Liên hệ chúng tôi</h6>
             <ul>
                 <li className="flex items-center gap-2 py-1"><PhoneIcon className="text-lg"/> +84 9876543210</li>
                 <li className="flex items-center gap-2 py-1"><LocationOnIcon className="text-lg"/>Teahouse: 123A Đường số 1, P. ABC, Hà Nội.</li>
                 <li className="flex items-center gap-2 py-1"><EmailIcon className="text-lg"/> info@rostolftea.com</li>
             </ul>
                <aside className="mt-6">
                    <p>© {new Date().getFullYear()} - Rostolf Tea. All right reserved</p>
                </aside>
            </div>
        </footer>
    )
}