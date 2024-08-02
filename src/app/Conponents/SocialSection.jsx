
const SocialSection = () => {
  return (
    <section className=' w-full relative pt-10'>
    <h3 className=' py-5 text-6xl text-[#353535] font-burga text-center relative z-10'>COMING SOON...</h3>

    <h2 className=' text-9xl font-burga text-white pt-20 pb-28 px-10 relative z-10'>SOCIAL MEDIA <br /> LINKS</h2>

    <div className=' relative z-10 w-full'>
    <div aria-hidden className=' h-24 w-full bg-[#ffc700] pointer-events-none absolute z-0 top-0 left-0' style={{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)"}}/>

    </div>

    <div className=' absolute top-0 left-0 w-full h-full z-0' id='socialGradient'></div>
      
    </section>
  )
}

export default SocialSection
