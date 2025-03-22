import React, { useState } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const Time = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemHeight = 60; // Height of each h1 element, adjust accordingly
  const totalItems = 15;

  // Handle scroll event
  const handleScroll = (e) => {
    const scrollY = e.target.scrollTop;
    setScrollPosition(scrollY);
  };

  // Calculate opacity based on the scroll position
  const getOpacity = (index) => {
    const middlePosition = scrollPosition + window.innerHeight / 2; // Middle of the screen
    const itemPosition = index * itemHeight + itemHeight / 2; // Middle position of each item

    // Calculate distance from middle
    const distanceFromMiddle = Math.abs(middlePosition - itemPosition);
    const maxDistance = window.innerHeight / 2; // Max distance where the opacity will be 0

    const opacity = Math.max(0, 1 - distanceFromMiddle / maxDistance); // Adjust opacity based on distance
    return opacity;
  };

  return (
    <div className="mt-5">
      <StickyScroll content={content} />
    </div>
  );
};

export default Time;
export const content = [
  {
    title: "2003-2008",
    description:
      "CBSG contributed to enhance organizations, strengthens livelihoods, expands training with UNICEF, advances urban governance with ADB, and drives healthcare insights for USAID’s Smiling Sun Program.",
    content: [
      {
        Content_title: "ABC Company",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://assets.aceternity.com/demos"
      },
      {
        Content_title: "XYZ Corporation",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        image: "https://assets.aceternity.com/demos"
      }
    ]
  },
  {
    title: "2009-2014",
    description:
      "CBSG expanded its reach, partnering with WHO for public health initiatives, collaborating with UNDP for sustainable development, and pioneering educational reforms in collaboration with the World Bank.",
    content: [
      {
        Content_title: "DEF Enterprises",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        image: "https://assets.aceternity.com/demos"
      },
      {
        Content_title: "GHI Solutions",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        image: "https://assets.aceternity.com/demos"
      }
    ]
  },
  {
    title: "2015-2020",
    description:
      "CBSG focused on digital transformation, strengthening its ties with tech giants, improving disaster resilience with the Red Cross, and launching global leadership programs.",
    content: [
      {
        Content_title: "JKL Innovations",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        image: "https://assets.aceternity.com/demos"
      },
      {
        Content_title: "MNO Tech",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        image: "https://assets.aceternity.com/demos"
      }
    ]
  }
];

