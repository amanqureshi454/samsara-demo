"use client";

import { cn } from "@/app/lib/utlis";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const items = [
    {
      title: "Application Process",
      img: "images/application.png",
      description:
        "A technology company that builds economic infrastructure for the internet.",
    },
    {
      title: "Visa Inquiry",
      img: "images/inquiry.png",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      title: "Education Permit",
      img: "images/permit.png",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
    },
    {
      title: "Immigration Services",
      img: "images/migration.png",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative block w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-blue-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card img={item.img}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children, img }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-white p-4 shadow-xl shadow-blue-900 group-hover:border-blue-500 dark:border-white/[0.2]",
        className,
      )}
    >
      <div className="relative z-50 h-full">
        <div className="h-[300px] w-full">
          <img
            src={img}
            className="h-full w-full rounded-xl object-cover"
            alt=""
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "mt-4 font-[Satoshi] text-xl font-semibold tracking-wide text-black",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-md mt-2 font-[Satoshi] text-black", className)}>
      {children}
    </p>
  );
};
