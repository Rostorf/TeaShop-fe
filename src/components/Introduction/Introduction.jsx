
function Introduction() {
  return (
    <div>

        <div className="mx-auto lg:container p-[100px] grid grid-cols-2 gap-9 relative">
          <img src="src/components/Images/Introduction/introduction1.jpg" alt="Introduction" className="h-[100%] w-[100%]"/>

          <div>
            <p className="font-sm font-inter text-2xl text-[#3a6b35] mb-6">Về chúng tôi</p>
            <h1 className="font-bold font-inter text-5xl mb-6 tracking-wide">Trà cao cấp đến từ Việt Nam</h1>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus maximus, feugiat quam ac, elementum ligula. Aliquam eget vehicula erat.</p>
            <p className="tracking-wider">Pellentesque quis velit ullamcorper, interdum erat ac, viverra ex. Ut ex ante, lacinia efficitur gravida eget, tincidunt id metus. Proin faucibus tempor velit, vitae tincidunt erat blandit eu. Donec luctus augue tempus dapibus aliquet. Mauris scelerisque pharetra molestie.</p>
            <p className="tracking-wider">Quisque blandit ut nisl ut molestie. Etiam ut metus orci. Nam vehicula laoreet arcu quis elementum. Proin ut purus justo. Nunc dui lacus, gravida sit amet tortor ac, maximus tincidunt metus.</p>
            <a href="/productlist">
              <button className="bg-lime-600 hover:bg-lime-800 text-white hover:text-white font-semibold py-3 px-8 transition duration-300 flex items-center mt-8">
                Khám phá sản phẩm từ chúng tôi
              </button>
            </a>
          </div>
        </div>

    </div>
  )
}

export default Introduction