const Reviews = ({ img, name, text, position }) => {
  return (
    <div
      className={`reviews-container bg-[#512051] p-8 rounded-lg gap-6 flex flex-col lg:self-${position} lg:h-fit`}
    >
      <div className="flex flex-row gap-6 items-center">
        <img src={img} className="rounded-full w-[40px] h-[40px]"></img>
        <div className="flex flex-col items-center justify-start gap-1">
          <p className="text-white text-[17px] font-bold">{name}</p>
          <p className="text-[#EE69A4] text-[17px] font-[400]">
            Verified Buyer
          </p>
        </div>
      </div>
      <p className="text-[17px] text-white tracking-[0.3px] font-[500] leading-[22px]">
        {text}
      </p>
    </div>
  );
};

export default Reviews;
