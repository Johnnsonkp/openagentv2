import bannerPattern from '../../assets/images/pattern-bg.png'

function BannerSection({title}: {title: string}) {
  return (
    <header
        className="h-[280px] max-h-[280px] bg-[rgba(26,121,78,1)] relative flex items-end justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerPattern})` }}
      >
        <div className='max-w-[650px]'>
          <h1 className="text-white font-semibold text-5xl leading-[1.3] text-center mb-7">
            {title}
          </h1>
        </div>
    </header>
  )
}

export default BannerSection