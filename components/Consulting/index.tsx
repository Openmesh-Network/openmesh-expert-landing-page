/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[30px] pt-[85px] text-[#000000] md:px-[90px] lg:pt-[172px]"
      >
        <div className="mx-auto lg:flex xl:max-w-[1500px]">
          <div className="text-[14px] font-medium -tracking-[2%] text-[#959595] lg:mr-[55px] lg:text-[20px] lg:!leading-[34px] xl:max-w-[490px] xl:text-[28px]">
            As a Openmesh Expert, you will become a
            <span className="!important font-bold text-[#000000]">
              {' '}
              highly-sought consultant
            </span>{' '}
            for implementing blockchain data solutions for Web2 and Web3
            companies
          </div>
          <div className="mt-[18px] max-w-[638px] text-[11px] font-medium -tracking-[2%] lg:mt-0 lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
            <div>
              Openmesh is building a decentralized data infrastructure aimed at
              storing important global data without a middleman, starting with
              Web3 data.
            </div>
            <div className="mt-[18px] lg:mt-[30px]">
              Openmesh tools and stack are designed for developers to plan,
              design, deploy, and manage data infrastructure and data
              applications in minutes instead of weeks, and pay only for
              computing and storage, nothing else.
            </div>
            <div className="mt-[18px] font-bold lg:mt-[30px]">
              No license fees, no setup fees.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
