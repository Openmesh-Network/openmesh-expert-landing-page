/* eslint-disable react/no-unescaped-entities */
const Consulting = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[30px] pt-[85px] text-[#000000] md:px-[90px] lg:pt-[172px]"
      >
        <div className="mx-auto lg:flex xl:max-w-[1500px]">
          <div className="text-[14px] font-medium -tracking-[2%] text-[#959595] lg:mr-[55px] lg:text-[20px] lg:!leading-[34px] xl:text-[28px] 2xl:min-w-[500px]">
            As a Openmesh Expert, you will become a
            <span className="!important font-bold text-[#000000]">
              {' '}
              highly-sought consultant
            </span>{' '}
            for implementing blockchain data solutions for Web2 and Web3
            companies
          </div>
          <div className="mt-[20px] grid gap-y-[15px] text-[11px] font-medium text-[#959595] md:grid-cols-3 md:gap-y-0 md:gap-x-[25px] lg:mt-0 lg:text-[12px] lg:!leading-[150%] xl:text-[16px]">
            <div className="h-fit bg-[#FAFAFA] p-[13px] lg:p-[18px] xl:p-[25px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/consulting/certificate.png`}
                alt="image"
                className={``}
              />
              <div className="mt-[15px] text-[11px] font-bold -tracking-[2%] lg:mt-[25px] lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
                Openmesh Open License (OOL)
              </div>
              <div className="mt-[15px] lg:mt-[25px] ">
                The Openmesh Expert badge will help companies to identify you as
                being an expert not only in Openmesh Core services, but also
                data and blockchain infrastructure services
              </div>
            </div>
            <div className="h-fit bg-[#FAFAFA] p-[13px] lg:p-[18px] xl:p-[25px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/consulting/hands.png`}
                alt="image"
                className={``}
              />
              <div className="mt-[15px] text-[11px] font-bold -tracking-[2%] lg:mt-[25px] lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
                Clients & Network
              </div>
              <div className="mt-[15px] lg:mt-[25px] ">
                As the global economy requires more and more data to ingest, you
                can leverage the Openmesh network to get more clients and
                partnerships
              </div>
            </div>
            <div className="h-fit bg-[#FAFAFA] p-[13px] lg:p-[18px] xl:p-[25px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/consulting/computer.png`}
                alt="image"
                className={``}
              />
              <div className="mt-[15px] text-[11px] font-bold -tracking-[2%] lg:mt-[25px] lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
                Growth
              </div>
              <div className="mt-[15px] lg:mt-[25px] ">
                Be a part of the growing Openmesh network and be the first to
                get product updates and offerings through our expanding
                collaborators and contributors
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consulting
