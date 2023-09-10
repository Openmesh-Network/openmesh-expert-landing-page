/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  const features = [
    {
      name: 'Open',
      description:
        'Openmesh is committed to democratize access to data for everyone',
    },
    {
      name: 'Transparent',
      description:
        'Development of Openmesh will always be open-source and transparent',
    },
    {
      name: 'Decentralized',
      description:
        'Decentralized designs limit single-entity dominance and reduce single failure points',
    },
    {
      name: 'Secure',
      description:
        'Openmesh emphasizes on privacy, trust, and transparency by design',
    },
  ]
  const featuresNumbers = [
    {
      name: '20+',
      description: 'Speakers',
    },
    {
      name: '80+',
      description: 'Insightful topics',
    },
    {
      name: '5+',
      description: 'Challenges',
    },
    {
      name: '$25k',
      description: 'Prizes',
    },
    {
      name: 'OPEN',
      description: 'Development',
    },
    {
      name: '300+',
      description: 'Community AirDrop',
    },
  ]
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[30px] pt-[53px] text-[#000000] md:px-[90px] lg:pt-[132px]"
      >
        <div className="mx-auto lg:flex xl:max-w-[1100px]">
          <div className="text-center text-[24px] font-medium -tracking-[2%] lg:text-start lg:text-[33px] lg:!leading-[58px] xl:text-[48px]">
            Openmesh Vision and Values
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
        <div className="mx-auto mt-[35px] grid gap-x-[70px] gap-y-[20px] lg:mt-[105px] lg:grid-cols-4 xl:max-w-[1200px]">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="text-[12px] font-bold tracking-[2.2%] md:text-[15px] lg:text-[17px] xl:text-[24px] xl:!leading-[150%]">
                {feature.name}
              </div>
              <div className="mt-[8px] text-[10px] font-medium text-[#959595] md:text-[12px] lg:mt-[15px] lg:text-[14px] lg:!leading-[24px] xl:text-[20px]">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-[55px] grid grid-cols-3 gap-y-[20px] gap-x-[50px] lg:grid-cols-6 lg:gap-x-[100px] xl:mt-[95px] xl:max-w-[1400px]">
          {featuresNumbers.map((feature, index) => (
            <div key={index}>
              <div className="text-center text-[24px] font-bold md:text-[29px] lg:text-[34px] xl:text-[40px] xl:!leading-[48px]">
                {feature.name}
              </div>
              <div className="mt-[5px] text-center text-[8px] font-normal md:text-[10px] lg:text-[12px] xl:text-[16px] xl:!leading-[19px]">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-[55px] flex h-[1px] max-w-[1445px] bg-[#D4D4D4] lg:mt-[95px]"></div>
      </section>
    </>
  )
}

export default Hero
