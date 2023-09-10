export interface SingleCardProps {
  title: string
  description: string
  href: string
  logo: string
}

const SingleCard = ({ title, description, logo, href }: SingleCardProps) => {
  return (
    <div className="justify-start rounded-[8px] bg-[#FAFAFA] p-[15px] text-start text-[#000000]  shadow-md lg:p-[25px]">
      <div className="flex">
        <img
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }${logo}`}
          alt="image rounded-[5px]"
        />
      </div>
      <div className="mt-[14px] md:mt-[28px] lg:pl-[15px]">
        <div
          title={title}
          className="text-[18px] font-bold -tracking-[2%]  lg:text-[21px] lg:!leading-[36px] xl:max-w-[300px]  xl:text-[30px]"
        >
          {title}
        </div>
        <div className="mt-[9px] text-[12px]  font-normal -tracking-[2%] lg:mt-[17px]  lg:text-[14px] lg:!leading-[150%] xl:text-[20px]">
          {description}
        </div>
        <div className="mt-[10px] flex text-center lg:mt-[20px]">
          <a
            href={href}
            className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[12px] py-[7px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[9px] lg:px-[25px] lg:text-[12px] lg:!leading-[19px] xl:text-[16px]"
          >
            Join now
          </a>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
