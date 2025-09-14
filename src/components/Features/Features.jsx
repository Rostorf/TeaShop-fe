import SectionTitle from "../SectionTitle/SectionTitle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "antd";
import products from '../../pages/Products/Products';
import { Link } from 'react-router-dom';

function Features() {

    // const {id, name, price, image, slug} = data;

    // const features = [
    //     {
    //         title: 'Trà trắng',
    //         price: '200.000 VNĐ',
    //         image: '/src/components/Images/Products/white.webp'
    //     },
    //     {
    //         title: 'Trà xanh',
    //         price: '450.000 VNĐ',
    //         image: '/src/components/Images/Products/green.webp'
    //     },
    //     {
    //         title: 'Trà oolong',
    //         price: '300.000 VNĐ',
    //         image: '/src/components/Images/Products/oolong.webp'
    //     },
    //     {
    //         title: 'Trà Chamomile',
    //         price: '150.000 VNĐ',
    //         image: '/src/components/Images/Products/chamomile.jpg'
    //     },
    //     {
    //         title: 'Hồng trà',
    //         price: '250.000 VNĐ',
    //         image: '/src/components/Images/Products/assam.png'
    //     },
    //     {
    //         title: 'Trà Lipton',
    //         price: '125.000 VNĐ',
    //         image: '/src/components/Images/Products/lipton.webp'
    //     }
    // ]

    const featuredProducts = products.slice(0, 4);
    
  return (
    <div>
        <div className="lg:container mx-auto"></div>
        <SectionTitle title="Sản phẩm phổ biến" mb='mb-11'></SectionTitle>

    <div className="w-full h-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {
            featuredProducts.map((product, key) => (
                <div className="shadow-md rounded-4xl transition-transform duration-200 scale-100 hover:scale-110 mx-15 my-12" key={key}>
                    <div className="rounded-4xl">
                        <Link to = {`/productlist/${product.slug}`}>
                            <img src={product.image} alt={product.title} />
                        </Link>
                    </div>
                    <div className="feature_content">
                        <div className="flex items-center justify-between py-2">
                            <h4 className="text-2xl font-bold capitalize font-inter pl-5">{product.title}</h4>
                        </div>
                            <p className="text-1xl text-[#272342] font-semibold font-inter pb-3 pl-5">{product.price} VND</p>
                    </div>
                </div>
            ))
        }

    </div>

    </div>
  );
}


export default Features