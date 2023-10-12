import SingleCard from './SingleCard'

/* eslint-disable react/no-unescaped-entities */
const Plataforms = () => {
  const articles = [
    {
      title: 'Becoming an Openmesh Expert',
      description:
        "Discover and connect with leading Openmesh experts in our curated directory. Whether you're seeking solutions or expertise, this is your one-stop portal to the best in decentralized data technology. Dive in and shape your Web 3.0 journey with the pros.",
      href: `${process.env.NEXT_PUBLIC_BASE_URL}/oen`,
      call: 'Learn more',
      img: '/images/plataforms/person.png',
    },
    {
      title: 'Openmesh Expert Community',
      description:
        "Discover and connect with leading Openmesh experts in our curated directory. Whether you're seeking solutions or expertise, this is your one-stop portal to the best in decentralized data technology. Dive in and shape your Web 3.0 journey with the pros.",
      href: `${process.env.NEXT_PUBLIC_BASE_URL}/oec`,
      call: 'Join now',
      img: '/images/plataforms/people.png',
    },
    {
      title: 'Openmesh Academy',
      description:
        "Discover and connect with leading Openmesh experts in our curated directory. Whether you're seeking solutions or expertise, this is your one-stop portal to the best in decentralized data technology. Dive in and shape your Web 3.0 journey with the pros.",
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
