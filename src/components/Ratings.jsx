import Star from "./../assets/images/icon-star.svg";

const Ratings = ({ text, id }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:w-[445px] lg:px-8 justify-center items-center gap-3 bg-[#F7F2F7] p-4 rounded-lg ratings-${id}`}
    >
      <div className="flex flex-row gap-2">
        <img src={Star} alt="Star"></img>
        <img src={Star} alt="Star"></img>
        <img src={Star} alt="Star"></img>
        <img src={Star} alt="Star"></img>
        <img src={Star} alt="Star"></img>
      </div>
      <p className="text-[#512051] text-[17px] font-bold text-center">{text}</p>
    </div>
  );
};

export default Ratings;
