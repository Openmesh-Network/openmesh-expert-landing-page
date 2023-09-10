export interface SingleCardProps {
  title: string
  category: string
  logo: string
}

const SingleCard = ({ title, category, logo }: SingleCardProps) => {
  return (
    <div className="justify-start rounded-[8px] text-start text-[#000000]">
      <div className="flex">
        <img
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }${logo}`}
          alt="image"
        />
      </div>
      <div className="mt-[10px] md:mt-[20px] lg:pl-[25px]">
        <div className="w-fit rounded-[5px] bg-[#e0e0e0] px-[4px] py-[2px] text-[10px] font-semibold text-[#0354EC] md:text-[12px] lg:px-[9px] lg:py-[3px] lg:text-[14px] lg:!leading-[150%] xl:text-[14px]">
          {category}
        </div>
        <div
          title={title}
          className="mt-[10px] h-[60px] overflow-hidden  text-[12px] font-medium  -tracking-[2%] text-[#000] line-clamp-4 md:mt-[15px] lg:h-[144px]  lg:text-[14px] lg:!leading-[150%]  xl:text-[20px]"
        >
          {title}
        </div>
      </div>
    </div>
  )
}

export default SingleCard
