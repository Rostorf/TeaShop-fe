
function Brand() {

    const brands = [
        {
            id: 1,
            image: "/src/components/Images/Brands/brand_1.png"
        },
        {
            id: 2,
            image: "/src/components/Images/Brands/brand_2.png"
        },
        {
            id: 3,
            image: "/src/components/Images/Brands/brand_3.png"
        },
        {
            id: 4,
            image: "/src/components/Images/Brands/brand_4.png"
        },
        {
            id: 5,
            image: "/src/components/Images/Brands/brand_5.png"
        },
        {
            id: 6,
            image: "/src/components/Images/Brands/brand_6.png"
        },
        {
            id: 7,
            image: "/src/components/Images/Brands/brand_7.png"
        }
    ]

  return (
    <div className="lg:container max-auto">
        <div className="grid grid-cols-7 items-center justify-center gap-20">
            {
                brands?.map((brand) => (
                    <div key={brand?.id} className="brand_item box transition-transform duration-200 scale-100 hover:scale-130">
                        <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Brand