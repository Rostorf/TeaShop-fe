import Banner from "../../components/Banner/Banner";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import Introduction from "../../components/Introduction/Introduction";

function About() {
  return (
    <div>
      <div>
      {/* banner component */}
        <Banner/>
      </div>

      <div className="w-full min-h-[#150px]">
        <MoreInfo />
      </div>

      <div className="w-full">
        <Introduction/>

      </div>
    </div>
  )
}

export default About