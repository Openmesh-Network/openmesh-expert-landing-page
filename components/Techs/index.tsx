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
          <div className="mt-[10px] text-[15px] font-medium -tracking-[2%] text-[#959595] lg:mt-[20px] lg:text-[19px] lg:!leading-[150%] xl:text-[26px]">
            <div>Get to know Openmesh and its core services</div>
          </div>
        </div>
        <div className="mx-auto mt-[40px] lg:mt-[103px]  lg:flex xl:max-w-[1600px]">
          <div className="lg:mr-[50px] lg:pt-[100px] xl:mr-[90px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/introductionXnode.png`}
              alt="image"
              className={`mx-auto`}
            />
            <div className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://calendly.com/`}
                className="mx-auto mt-[25px] flex w-fit cursor-pointer items-center rounded-[5px] border border-[#000]  bg-transparent py-[6px] px-[20px] text-[12px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec] lg:mt-[50px] lg:py-[11.5px] lg:px-[40px] lg:text-[16px]"
              >
                Go to modules
              </a>
            </div>
          </div>
          <div className="mt-[20px]  ml-auto max-w-[830px] text-[11px] font-medium -tracking-[2%] lg:mt-0 lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/xnode.png`}
              alt="image"
              className={`mx-auto transition-all duration-300 hover:scale-110 lg:mx-0`}
            />
            <div className="mt-[20px] max-w-[698px] text-[15px] font-normal tracking-normal md:text-[18px] lg:mt-[40px] lg:text-[21px] lg:!leading-[36px] xl:text-[30px]">
              Design, develop, deploy, connect, and manage decentralized data
              clouds in any region in minutes, not months. Pay only for bare
              metal servers. No license, no setup fees.
            </div>
            <div className="mt-[20px] lg:mt-[40px] lg:flex">
              <div className="flex-1 text-[10px] font-medium !leading-[135%] lg:mr-[30px] lg:text-[12px] xl:text-[16px]">
                <span className="text-[12px] font-bold lg:text-[14px] xl:text-[20px]">
                  Modules:
                </span>{' '}
                <br />
                <br />
                <span>Getting Started</span>
                <br />
                <span className="text-[#959595]">
                  Initial considerations and resources for xNode deployment.
                </span>
                <br />
                <br />
                <span>Understanding Xnode</span>
                <br />
                <span className="text-[#959595]">
                  An introduction to xNode's role in decentralizing data
                  infrastructure.
                </span>
                <br />
                <br />
                <span>Setting Up</span>
                <br />
                <span className="text-[#959595]">
                  Step-by-step guide to deploying an xNode.
                </span>
                <br />
                <br />
                <span>Developer support and resources</span>
                <br />
                <span className="text-[#959595]">Docs & Research</span>
              </div>
              <div className="mt-[20px] flex-1 text-[10px]  font-medium !leading-[135%] lg:mt-0 lg:text-[12px] xl:text-[16px]">
                <span className="text-[12px] font-bold lg:text-[14px] xl:text-[20px]">
                  What you will learn:
                </span>{' '}
                <br />
                <br />
                <span>Capabilities</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>Create a Decentralized Data Cloud.</li>
                  <li>Connect Globally with Ease.</li>
                  <li>Share Data Securely.</li>
                  <li>Slash Deployment Costs.</li>
                  <li>Automate Data Cloud Setup.</li>
                </ul>
                <br />
                <br />
                <span>Use Cases:</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>Establishing a global decentralized data cloud.</li>
                  <li>
                    Providing secure, global data access for research
                    institutions.
                  </li>
                  <li>Cost-effective data management for startups.</li>
                </ul>
                <br />
                <br />
                <span>What is Included:</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>
                    Automated Deployment, Interconnected Design, Data-Sharing
                    Protocols like BitTorrent, aBFT consensus management, Cost
                    Efficiency Mechanisms.
                  </li>
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
        <div className="mx-auto mt-[55px] flex h-[1px] max-w-[1445px] bg-[#D4D4D4] lg:mt-[107px]"></div>
        <div className="mx-auto mt-[32px] lg:mt-[75px]  lg:flex xl:max-w-[1600px]">
          <div className="ml-auto max-w-[830px] text-[11px] font-medium -tracking-[2%] lg:mt-0 lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/unifiedAPI.png`}
              alt="image"
              className={`mx-auto transition-all duration-300 hover:scale-110 lg:mx-0`}
            />
            <div className="mt-[20px] max-w-[698px] text-[15px] font-normal tracking-normal md:text-[18px] lg:mt-[40px] lg:text-[21px] lg:!leading-[36px] xl:text-[30px]">
              A single endpoint for all crypto & web3 data, accessible to
              anyone, anywhere, always free. No license, no registration, no
              setup fees.
            </div>
            <div className="mt-[20px] lg:mt-[40px] lg:flex">
              <div className="flex-1 text-[10px] font-medium !leading-[135%] lg:mr-[30px] lg:text-[12px] xl:text-[16px]">
                <span className="text-[12px] font-bold lg:text-[14px] xl:text-[20px]">
                  Modules:
                </span>{' '}
                <br />
                <br />
                <span>Getting Started</span>
                <br />
                <span className="text-[#959595]">
                  Basics of Unified API and initial access points
                </span>
                <br />
                <br />
                <span>Understanding Pythia</span>
                <br />
                <span className="text-[#959595]">
                  Simplifying complex data access through a singular, open
                  interface
                </span>
                <br />
                <br />
                <span>Setting Up</span>
                <br />
                <span className="text-[#959595]">
                  Step-by-step guide to integrating Unified API
                </span>
                <br />
                <br />
                <span>Developer support and resources</span>
                <br />
                <span className="text-[#959595]">Docs & Research</span>
              </div>
              <div className="mt-[20px] flex-1 text-[10px]  font-medium !leading-[135%] lg:mt-0 lg:text-[12px] xl:text-[16px]">
                <span className="text-[12px] font-bold lg:text-[14px] xl:text-[20px]">
                  What you will learn:
                </span>{' '}
                <br />
                <br />
                <span>Capabilities</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>Access All Data with One Interface.</li>
                  <li>Build Powerfully with No Entry Barriers.</li>
                  <li>Streamline Development.</li>
                  <li>Customize Data Retrieval.</li>
                  <li>Ensure Robust Data Security.</li>
                </ul>
                <br />
                <br />
                <span>Use Cases:</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>Building a web3 dApps & web2 applications.</li>
                  <li>Data analytics</li>
                  <li>Research</li>
                </ul>
                <br />
                <br />
                <span>Advanced Features:</span>
                <br />
                <ul className="list-disc pl-[25px] text-[#959595]">
                  <li>
                    Advanced querying mechanisms, Data customization options,
                    Security enhancements, Continuous data updates, Integration
                    with other platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-[40px] lg:mt-0 lg:mr-[30px] lg:pt-[100px] xl:ml-[70px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/unifiedApiIntegration.png`}
              alt="image"
              className={`mx-auto`}
            />
            <div className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://calendly.com/`}
                className="mx-auto mt-[25px] flex w-fit cursor-pointer items-center rounded-[5px] border border-[#000]  bg-transparent py-[6px] px-[20px] text-[12px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec] lg:mt-[50px] lg:py-[11.5px] lg:px-[40px] lg:text-[16px]"
              >
                Go to modules
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[55px] flex h-[1px] max-w-[1445px] bg-[#D4D4D4] lg:mt-[107px]"></div>
        <div className="mx-auto mt-[55px] lg:mt-[75px]  lg:flex xl:max-w-[1600px]">
          <div className="lg:mr-[50px] lg:pt-[100px] xl:mr-[90px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/playingWithPythia.png`}
              alt="image"
              className={`mx-auto`}
            />
            <div className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://calendly.com/`}
                className="mx-auto mt-[25px] flex w-fit cursor-pointer items-center rounded-[5px] border border-[#000]  bg-transparent py-[6px] px-[20px] text-[12px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec] lg:mt-[50px] lg:py-[11.5px] lg:px-[40px] lg:text-[16px]"
              >
                Go to modules
              </a>
            </div>
          </div>
          <div className="mt-[20px]  ml-auto max-w-[830px] text-[11px] font-medium -tracking-[2%] lg:mt-0 lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/techs/pythia.png`}
              alt="image"
              className={`mx-auto transition-all duration-300 hover:scale-110 lg:mx-0`}
            />
            <div className="mt-[20px] max-w-[698px] text-[15px] font-normal tracking-normal md:text-[18px] lg:mt-[40px] lg:text-[21px] lg:!leading-[36px] xl:text-[30px]">
              Design, build, visualize, and deploy powerful Web3 data products.
              Pythia is a powerhouse analytics & query engine that transforms
              raw data into actionable insights. Its search function operates
              like Google, letting you ask anything and receive answers
              instantly.
            </div>
            <div className="mt-[20px] lg:mt-[40px] lg:flex">
              <div className="flex-1 text-[10px] font-medium !leading-[135%] lg:mr-[30px] lg:text-[12px] xl:text-[16px]">
                <span className="text-[12px] font-bold lg:text-[14px] xl:text-[20px]">
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
              <div className="mt-[20px] flex-1 text-[10px]  font-medium !leading-[135%] lg:mt-0 lg:text-[12px] xl:text-[16px]">
                <span className="text-[12px] font-bold lg:text-[14px] xl:text-[20px]">
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
      </section>
    </>
  )
}

export default Techs
