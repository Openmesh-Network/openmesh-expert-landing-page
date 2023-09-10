import SingleCard from './SingleCard'

/* eslint-disable react/no-unescaped-entities */
const Articles = () => {
  const articles = [
    {
      title: 'Lorem ipsum religaris ipsew  religaris lorem ivust',
      category: 'Products',
      img: '/images/hero6/people.png',
    },
    {
      title: 'Lorem ipsum religaris ipsew  religaris lorem ivust',
      category: 'Announcements',
      img: '/images/hero6/people.png',
    },
    {
      title: 'Lorem ipsum religaris ipsew  religaris lorem ivust',
      category: 'Tech',
      img: '/images/hero6/people.png',
    },
  ]
  return (
    <>
      <section
        id="articles"
        className="relative z-10 overflow-hidden bg-white px-[40px] pb-[100px] pt-[85px] text-[#000000] md:px-[90px] lg:pt-[132px]"
      >
        <div className="mx-auto xl:max-w-[1200px]">
          <div className="flex justify-center text-center  text-[25px] font-medium -tracking-[2%] lg:text-[30px] lg:!leading-[77px] xl:text-[40px]">
            More articles
          </div>
          <div className="mt-[25px] grid grid-cols-1 gap-y-[10px] md:grid-cols-3 md:gap-x-[40px] xl:mt-[50px]">
            {articles.map((article, index) => (
              <div key={index}>
                <SingleCard
                  title={article.title}
                  category={article.category}
                  logo={article.img}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Articles
