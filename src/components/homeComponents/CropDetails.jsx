import React from "react";
import apple from "/public/apple.jpg";
import potato from "/public/potato.jpg";
import mango from "/public/mango.jpg";
import rice from "/public/rice.jpg";
import sugarcane from "/public/sugarcane.jpg";
import cotton from "/public/cotton.jpg";
import tomato from "/public/tomato.png";
import wheat from "/public/wheat.png";
import Title from "../common/Title";
import CropDetailsCard from "../common/cropDetailsCard";
const cropDetailsList = [
  {
    id: 1,
    img: rice,
    title: "Rice",
    badge: "Grains",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 1,
    img: sugarcane,
    title: "Rice",
    badge: "Grains",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 1,
    img: cotton,
    title: "Rice",
    badge: "Grains",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 2,
    img: mango,
    title: "Mango",
    badge: "Fruits",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 3,
    img: apple,
    title: "Apple",
    badge: "Fruits",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 4,
    img: wheat,
    title: "Wheat",
    badge: "Grains",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 5,
    img: potato,
    title: "Potato",
    badge: "Vegetables",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
  {
    id: 6,
    img: tomato,
    title: "Tomato",
    badge: "Vegetables",
    varieties: "Basmati, Jasmine, Arborio",
    Soil: "Clay loam, pH 5.5-7.0",
    Season: "Monsoon (June-July)",
  },
];
const CropDetails = () => {
  return (
    <div className="pt-20">
      <Title
        heading={"Farming Guides"}
        description={
          "Collection of guides and tutorials covering various aspects of farming practices, techniques, and methodologies."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {cropDetailsList?.map((item) => (
          <div key={item.id} className="">
            <CropDetailsCard
              title={item.title}
              image={item.img}
              badge={item.badge}
              varieties={item.varieties}
              soil={item.Soil}
              seasons={item.Season}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropDetails;
