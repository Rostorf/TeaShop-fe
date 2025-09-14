
function SectionTitle({title, mb}) {
    const margin = mb || 'mb-0';
  return (
    <div className='flex w-ful items-center justify-center'>
        <h3 className={`text-3xl text-[#272343] font-semibold font-inter capitalize ${margin}`}>{title}</h3>
    </div>
  )
}

export default SectionTitle