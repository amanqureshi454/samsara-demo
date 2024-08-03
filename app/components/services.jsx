import React from "react";

const Services = () => {
  return (
    <>
      <div className="relative h-full w-full overflow-hidden bg-[#233552] pb-10">
        <div className="services__wrapper mx-auto flex h-full max-w-7xl flex-col items-center justify-start">
          <h4 className="mt-10 text-left font-[Satoshi] text-3xl font-semibold capitalize text-white">
            What We Do For You
          </h4>
          <p className="mt-2 text-left font-[Satoshi] text-lg font-medium capitalize text-white">
            We can inspire and offer different services
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-1 md:col-span-2 md:row-span-2 md:grid-cols-2 md:px-10">
            <div className="relative lg:h-[300px] lg:w-[450px]">
              <img
                src="images/application.png"
                className="h-full w-full rounded-xl object-cover"
                alt=""
              />
              <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-center rounded-lg bg-black/60">
                <p className="text-center font-[Satoshi] text-lg font-medium capitalize text-white">
                  Application Process
                </p>
              </div>
            </div>
            <div className="relative lg:h-[300px] lg:w-[450px]">
              <img
                src="images/inquiry.png"
                className="h-full w-full rounded-xl object-cover"
                alt=""
              />
              <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-center rounded-lg bg-black/60">
                <p className="text-center font-[Satoshi] text-lg font-medium capitalize text-white">
                  Visa Inquiry
                </p>
              </div>
            </div>
            <div className="relative lg:h-[300px] lg:w-[450px]">
              <img
                src="images/migration.png"
                className="h-full w-full rounded-xl object-cover"
                alt=""
              />
              <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-center rounded-lg bg-black/60">
                <p className="text-center font-[Satoshi] text-lg font-medium capitalize text-white">
                  Education Permit
                </p>
              </div>
            </div>
            <div className="relative lg:h-[300px] lg:w-[450px]">
              <img
                src="images/permit.png"
                className="h-full w-full rounded-xl object-cover"
                alt=""
              />
              <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-center rounded-lg bg-black/60">
                <p className="text-center font-[Satoshi] text-lg font-medium capitalize text-white">
                  Immigration Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
