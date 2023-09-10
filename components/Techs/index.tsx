/* eslint-disable react/no-unescaped-entities */
const Techs = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[30px] pt-[43px] text-[#000000] md:px-[90px] lg:pt-[105px]"
      >
        <div className="justify-center text-center">
          <div className=" flex justify-center text-[24px] font-medium -tracking-[2%] lg:text-start lg:text-[33px] lg:!leading-[58px] xl:text-[48px]">
            Openmesh Academy
          </div>
          <div className="mt-[10px] text-[13px] font-medium -tracking-[2%] text-[#959595] md:text-[15px] lg:mt-[20px] lg:text-[19px] lg:!leading-[150%] xl:text-[26px]">
            <div>Get to know Openmesh and its core services</div>
          </div>
        </div>
        <div className="mx-auto mt-[60px] lg:mt-[103px]  lg:flex xl:max-w-[1600px]">
          <div className="mr-[90px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/introductionXnode.png`}
              alt="image"
              className={``}
            />
            <div className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://calendly.com/`}
                className="mt-[25px] flex max-w-[193px] cursor-pointer items-center rounded-[5px] border border-[#000]  bg-transparent py-[11.5px] px-[40px] text-[16px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec] lg:mt-[50px]"
              >
                Go to modules
              </a>
            </div>
          </div>
          <div className="mt-[18px]  ml-auto max-w-[830px] text-[11px] font-medium -tracking-[2%] lg:mt-0 lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/pythia.png`}
              alt="image"
              className={`transition-all duration-300 hover:scale-110`}
            />
            <div className="mt-[40px] max-w-[638px] text-[15px] font-normal tracking-normal md:text-[18px] lg:text-[21px] lg:!leading-[36px] xl:text-[30px]">
              Design, build, visualize, and deploy powerful Web3 data products.
              Pythia is a powerhouse analytics & query engine that transforms
              raw data into actionable insights. Its search function operates
              like Google, letting you ask anything and receive answers
              instantly.
            </div>
            <div className="mt-[40px] lg:flex">
              <div className="max-w-[400px] text-[8px] font-medium !leading-[135%] md:text-[10px] lg:mr-[30px] lg:text-[12px] xl:text-[16px]">
                <span className="text-[10px] font-bold md:text-[12px] lg:text-[14px] xl:text-[20px]">
                  Modules:
                </span>{' '}
                <br />
                <br />
                <span>Getting Started</span>
                <br />
                <span className="text-[#959595]">
                  Analytics & query engine for insightful data products.
                </span>
                <br />
                <br />
                <span>Understanding Pythia</span>
                <br />
                <span className="text-[#959595]">
                  Simplifying complex data access through a singular, open
                  interface.
                </span>
                <br />
                <br />
                <span>Setting Up</span>
                <br />
                <span className="text-[#959595]">
                  Step-by-step guide to deploying and using Pythia tools.
                </span>
                <br />
                <br />
                <span>Developer support and resources</span>
                <br />
                <span className="text-[#959595]">Docs & Research</span>
              </div>
              <div className="max-w-[400px] text-[8px] font-medium !leading-[135%] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                <span className="text-[10px] font-bold md:text-[12px] lg:text-[14px] xl:text-[20px]">
                  What you will learn:
                </span>{' '}
                <br />
                <br />
                <span>Capabilities</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>Search Anything Instantly.</li>
                  <li>Design Custom Web3 Data Products. </li>
                  <li>Harness SQL for Complex Analysis. </li>
                  <li>Visualize and Understand Data. </li>
                  <li>Seamlessly Integrate with the Openmesh Ecosystem. </li>
                </ul>
                <br />
                <br />
                <span>Use Cases:</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>Analyzing cryptocurrency market trends.</li>
                  <li>Design Custom Web3 Data Products. </li>
                  <li>Harness SQL for Complex Analysis. </li>
                  <li>Visualize and Understand Data. </li>
                  <li>Seamlessly Integrate with the Openmesh Ecosystem. </li>
                </ul>
                <br />
                <br />
                <span>Advanced Features:</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>
                    Advanced search algorithms, Enhanced data visualization
                    tools, Integration with other Openmesh tools, Open-source
                    contribution opportunities, Developer resources and
                    community support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[55px] flex h-[1px] max-w-[1445px] bg-[#D4D4D4] lg:mt-[95px]"></div>
      </section>
    </>
  )
}

export default Techs
