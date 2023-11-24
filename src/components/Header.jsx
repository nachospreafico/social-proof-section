import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col gap-8 pt-20 ">
      <h2 className="text-[#512051] text-[40px] font-bold leading-8 text-center lg:text-[56px] lg:text-left lg:leading-[48px] ">
        10,000+ of our users love our products.
      </h2>
      <p className="text-[#927B91] text-center text-[19px] lg:text-left leading-6 tracking-[-0.6px] lg:w-[80%]">
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </header>
  );
};

export default Header;
