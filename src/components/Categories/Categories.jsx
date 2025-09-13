import { useNavigate } from "react-router-dom"
import SectionTitle from "../SectionTitle/SectionTitle"

function Categories() {
    const navigate = useNavigate()

    const categories = [
        {
            title: <div onClick={() => navigate('whitetea')}>
            Trà trắng
            </div>,
            image: 'src/components/Images/Categories/whiteteacategory.webp'
        },
        {
            title: <div onClick={() => navigate('greentea')}>
            Trà xanh
            </div>,
            image: 'src/components/Images/Categories/greenteacategory.webp'
        },
        {
            title: <div onClick={() => navigate('oolongtea')}>
            Trà ô long
            </div>,
            image: 'src/components/Images/Categories/oolongteacategory.webp'
        },
        {
            title: <div onClick={() => navigate('hongtra')}>
            Hồng trà
            </div>,
            image: 'src/components/Images/Categories/pinkteacategory.webp'
        }
    ]

  return (
    <div>
        <SectionTitle title="Danh mục nổi bật" mb='mb-11'></SectionTitle>
        <div className="w-full h-full grid grid-cols-2 gap-5 mt-10">
        {
            categories?.map((category, index) => (
                <div className="shadow-md rounded-2xl cursor-pointer transition-transform duration-200 scale-100 hover:scale-105" key={index}>
                    <div className="category_image mb-4 relative">
                        <img className="rounded-lg w-full h-[300px]" src={category?.image} alt={category?.title} />
                        <div>
                            <h4 className="flex items-center justify-center mt-4 font-inter font-bold">{category?.title}</h4>
                        </div>
                    </div>
                </div>
            ))
        }

        </div>
    </div>
  )
}

export default Categories