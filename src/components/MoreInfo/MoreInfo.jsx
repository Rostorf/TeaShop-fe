import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

function MoreInfo() {
  return (
    <div className="moreinfo_component bg-[#212024] mx-90 shadow-md p-10 pr-0 rounded-full opacity-[90%]">
      <div className="grid grid-cols-3">
        <div className="moreInfo-wrapper">
          <div className='flex items-center gap-4'>
            <p className='text-[#c4c2d1]'><LocalShippingIcon fontSize='large'/></p>
            <div>
              <h4 className='text-base text-[#c4c2d1] capitalize font-inter font-medium mb-1'>Giao hàng miễn phí</h4>
              
              <h4 className='text-base text-lime-400 capitalize font-inter font-medium'>Mọi lúc mọi nơi</h4>
            </div>
          </div>
        </div>
        <div className="moreInfo-wrapper">
          <div className='flex items-center gap-4'>
            <p className='text-[#c4c2d1]'><SupportAgentIcon fontSize='large'/></p>
            <div>
              <h4 className='text-base text-[#c4c2d1] capitalize font-inter font-medium mb-1'>Hỗ trợ trực tiếp</h4>
              
              <h4 className='text-base text-lime-400 capitalize font-inter font-medium'>Nhiệt tình</h4>
            </div>
          </div>
        </div>
        <div className="moreInfo-wrapper">
          <div className='flex items-center gap-4'>
            <p className='text-[#c4c2d1]'><EmojiFoodBeverageIcon fontSize='large'/></p>
            <div>
              <h4 className='text-base text-[#c4c2d1] capitalize font-inter font-medium mb-1'>Thanh toán trực tuyến</h4>
              
              <h4 className='text-base text-lime-400 capitalize font-inter font-medium'>Hoàn tiền 100%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo