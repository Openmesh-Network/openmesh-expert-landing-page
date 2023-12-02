import SingleCard from './SingleCard'

/* eslint-disable react/no-unescaped-entities */
const Plataforms = () => {
  const articles = [
    {
      title: 'Becoming an Openmesh Expert',
      description:
        "Openmesh is an open-source project and does not have sales, or technical support like traditional SaaS or IaaS business models. An Openmesh Expert is an individual or a company who has an in-depth understanding, familiarity, and proficiency with the Openmesh technology stack and tools. Their expertise isn't just theoretical; they actively build, contribute, enhance, and maintain the Openmesh Network, ensuring its seamless growth and development.",
      href: `${process.env.NEXT_PUBLIC_BASE_URL}/oen`,
      call: 'Learn more',
      img: '/images/plataforms/person.png',
    },
    {
      title: 'Openmesh Expert Community',
      description:
        'The Openmesh Expert Network caters to individuals or entities well-versed in data and Web3 infrastructure. They assume a crucial role in implementing Openmesh Core services for businesses through the acquisition of the Openmesh Open License. The Openmesh Expert Network (OEN) serves as the collective nucleus of all Openmesh Experts (OEs).',
      href: `${process.env.NEXT_PUBLIC_BASE_URL}/oec`,
      call: 'Join now',
      img: '/images/plataforms/people.png',
    },
    {
      title: 'Openmesh Academy',
      description:
        "Openmesh Academy is a comprehensive platform that equips you with the knowledge and tools to leverage Openmesh's core services effectively. It's a hub of learning modules designed to empower the OEN in harnessing decentralized data clouds and cutting-edge technologies.",
      href: `${process.env.NEXT_PUBLIC_BASE_URL}/academy`,
      call: 'Watch modules',
      img: '/images/plataforms/introduction-xnode.png',
    },
  ]
  return (
    <>
      <section
        id="articles"
        className="relative z-10 overflow-hidden bg-white px-[40px] pt-[75px] pb-[20px] text-[#000000] md:px-[90px] lg:pt-[182px]"
      >
        <div className="mx-auto xl:max-w-[1500px]">
          <div className="grid grid-cols-1 gap-y-[35px] md:grid-cols-3 md:gap-x-[30px] lg:gap-x-[70px] xl:gap-x-[90px]">
            {articles.map((article, index) => (
              <div key={index}>
                <SingleCard
                  title={article.title}
                  description={article.description}
                  href={article.href}
                  logo={article.img}
                  call={article.call}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Plataforms
