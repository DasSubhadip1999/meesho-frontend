import React from "react";
import Essential from "./addBanners/Essential";
import LowestPrice from "./addBanners/LowestPrice";
import Reseller from "./addBanners/Reseller";
import Supplier from "./addBanners/Supplier";
import TopCatagories from "./addBanners/TopCatagories";

const AddBanner = () => {
  return (
    <div className="px-[13rem] hidden lg:block">
      <LowestPrice />
      <TopCatagories />
      <Essential />
      <Reseller />
      <Supplier />
    </div>
  );
};

export default AddBanner;
