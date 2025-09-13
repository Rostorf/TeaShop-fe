import { useNavigate } from "react-router-dom"
import SectionTitle from "../SectionTitle/SectionTitle"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Features() {

    const navigate = useNavigate();

    const features = [
        {
            title: 'Trà trắng',
            price: '200.000 VNĐ',
            image: '/src/components/Images/Products/white.webp'
        },
        {
            title: 'Trà xanh',
            price: '450.000 VNĐ',
            image: '/src/components/Images/Products/green.webp'
        },
        {
            title: 'Trà oolong',
            price: '300.000 VNĐ',
            image: '/src/components/Images/Products/oolong.webp'
        },
        {
            title: 'Trà Chamomile',
            price: '150.000 VNĐ',
            image: '/src/components/Images/Products/chamomile.jpg'
        },
        {
            title: 'Hồng trà',
            price: '250.000 VNĐ',
            image: '/src/components/Images/Products/assam.png'
        },
        {
            title: 'Trà Lipton',
            price: '125.000 VNĐ',
            image: '/src/components/Images/Products/lipton.webp'
        }
    ]

  return (
    <div>
        <div className="lg:container mx-auto"></div>
        <SectionTitle title="Sản phẩm phổ biến" mb='mb-11'></SectionTitle>

    <div className="slider-container features_slider w-full h-full grid grid-cols-3 gap-20">
        {
            features?.map((feature, index) => (
                <div className="shadow-md rounded-4xl transition-transform duration-200 scale-100 hover:scale-110" key={index}>
                    <div className="feature_image">
                        <img src={feature?.image} alt={feature?.title} />
                    </div>
                    <div className="feature_content">
                        <div className="flex items-center justify-between py-2">
                            <h4 className="text-2xl font-bold capitalize font-inter pl-5">{feature?.title} </h4>
                            <span className="bg-[#2aaf5d] m-3 h-[44px] w-[44px] rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-green-700 transition-colors"><ShoppingCartIcon/></span>
                        </div>
                            <p className="text-x1 text-[#272342] font-semibold font-inter pb-3 pl-5">{feature?.price}</p>
                    </div>
                </div>
            ))
        }

    </div>

    </div>
  );
}


export default Features