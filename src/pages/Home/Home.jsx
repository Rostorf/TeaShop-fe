import Banner from "../../components/Banner/Banner";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import Brand from "../../components/Brand/Brand";
import Features from "../../components/Features/Features";
import Categories from "../../components/Categories/Categories";
import Introduction from "../../components/Introduction/Introduction";

function Home() {
  return (
    <div className="bg-white">
      <div>
      {/* banner component */}
        <Banner/>
      </div>

      {/* more info component */}
      <div className="w-full min-h-[#150px]">
        <MoreInfo />
      </div>

      {/* introduction component */}
      <div>
        <Introduction/>
      </div>
      
      {/* features component */}
      <div className="w-full flex items-center justify-center mb-20 mt-12">
        <Features/>
      </div>

      {/* category component */}
      <div className="wfull flex items-center justify-center">
        <Categories />
      </div>

      {/* brand component */}
      <div className="brand flex items-center justify-center w-full mb-12 mt-40 h-[171px]">
        <Brand/>
      </div>

    </div>
  )
}

export default Home