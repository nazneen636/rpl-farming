import React from "react";
import Title from "../common/Title";
import GuidesCard from "../common/GuidesCard";
import g1 from "/public/g1.jpg";
import g2 from "/public/g2.jpg";
import vegetables from "/public/vegetables-1.jpg";
import g3 from "/public/vegetables.jpg";
import fruit from "/public/fruit.jpg";

const guideList = [
  {
    id: 1,
    img: g1,
    title: "Biological Controls",
    badge: "Strategy",
    contents:
      "Learn essential techniques for preparing and maintaining healthy soil for optimal crop growth.",
  },
  {
    id: 2,
    img: g2,
    title: "Biological Controls",
    badge: "Strategy",
    contents:
      "Complete guide to rice farming from seed selection to harvesting and post-harvest management.",
  },
  {
    id: 3,
    img: g3,
    title: "Organic Remedies",
    badge: "Strategy",
    contents:
      "Comprehensive guide to organic farming methods, certification, and sustainable practices.",
  },
  {
    id: 3,
    img: fruit,
    title: "Organic Remedies",
    badge: "Strategy",
    contents:
      "Comprehensive guide to organic farming methods, certification, and sustainable practices.",
  },
  {
    id: 3,
    img: vegetables,
    title: "Organic Remedies",
    badge: "Strategy",
    contents:
      "Comprehensive guide to organic farming methods, certification, and sustainable practices.",
  },
  {
    id: 3,
    img: fruit,
    title: "Organic Remedies",
    badge: "Strategy",
    contents:
      "Comprehensive guide to organic farming methods, certification, and sustainable practices.",
  },
  {
    id: 4,
    img: g1,
    title: "Aphids",
    badge: "Strategy",
    contents:
      "Step-by-step instructions for growing various vegetables with seasonal planting calendars.",
  },
  {
    id: 5,
    img: g2,
    title: "Cultural Practices",
    badge: "Strategy",
    contents:
      "Modern irrigation techniques including drip, sprinkler, and water conservation methods.",
  },
  {
    id: 6,
    img: g3,
    title: "Caterpillars",
    badge: "Strategy",
    contents:
      "Complete guide to establishing and managing fruit orchards for maximum yield.",
  },
];
const PestControl = () => {
  return (
    <div className="pt-20">
      <Title
        heading={"Pest Control Strategies"}
        description={
          "Collection of guides and tutorials covering various aspects of farming practices, techniques, and methodologies."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {guideList?.map((item) => (
          <div key={item.id} className="">
            <GuidesCard
              title={item.title}
              image={item.img}
              badge={item.badge}
              contents={item.contents}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestControl;
