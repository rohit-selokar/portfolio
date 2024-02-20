import React from "react";
import ecommerce from "../assets/project-ecommerce.jpg";
import clone from "../assets/project-clone.jpg";
import blockchain from "../assets/project-blockchain.jpg";
import weather from "../assets/project-weather.jpg";
import project from "../assets/project.jpg";

const Projects = () => {
  return (
    <div className="font-openSans lg:h-[112vh] xl:h-[62vh] lg:flex lg:items-center">
      <div>
        <p className="text-center text-white font-bold text-[30px]">Projects</p>
        <div className="mx-12 lg:mx-24 my-4 grid gap-5 md:grid-cols-2 md:gap-x-9 md:mx-24 lg:grid-cols-3 xl:grid-cols-4">
          <div className=" rounded-xl p-3 my-3 bg-slate-700 text-white transform hover:scale-110 duration-500">
            <div>
              <img src={ecommerce} className="rounded-lg" />
            </div>
            <p className="font-bold my-2">
              Shopping Application using React.js
            </p>
            <div className="flex items-center mt-4">
              <a
                href="https://ecommerce-app-context-api.vercel.app/login"
                target="_blank"
              >
                <button className="bg-purple-600 p-1.5 px-2 font-semibold rounded-md text-[16px]">
                  visit project
                </button>
              </a>
              <a
                href="https://github.com/rohit-selokar/ecommerce_app_context_api"
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl mx-7"></i>
              </a>
            </div>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

          <div className=" rounded-xl p-3 my-3 bg-slate-700 text-white transform hover:scale-110 duration-500">
            <div>
              <img src={clone} className="rounded-lg" />
            </div>
            <p className="font-bold my-2">Qloron Technology ERP page clone</p>
            <div className="flex items-center mt-4">
              <a href="https://qloron-erp-page.vercel.app/" target="_blank">
                <button className="bg-purple-600 p-1.5 px-2 font-semibold rounded-md text-[16px]">
                  visit project
                </button>
              </a>
              <a
                href="https://github.com/rohit-selokar/qloron-ERP-page"
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl mx-7"></i>
              </a>
            </div>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

          <div className=" rounded-xl p-3 my-3 bg-slate-700 text-white transform hover:scale-110 duration-500">
            <div>
              <img src={blockchain} className="rounded-lg" />
            </div>
            <p className="font-bold my-2">
              Carbon Credit Transfer System Using Blockchain
            </p>
            <div className="flex items-center mt-4">
              <a href="https://qloron-erp-page.vercel.app/" target="_blank">
                <button className="bg-purple-600 p-1.5 px-2 font-semibold rounded-md text-[16px]">
                  visit project
                </button>
              </a>
              <a
                href="https://github.com/rohit-selokar/qloron-ERP-page"
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl mx-7"></i>
              </a>
            </div>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

          <div className=" rounded-xl p-3 my-3 bg-slate-700 text-white transform hover:scale-110 duration-500">
            <div className="relative overflow-hidden">
              <img
                src={weather}
                className="rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <p className="font-bold my-2">Weather Application using React.js</p>
            <div className="flex items-center mt-4">
              <a
                href="https://weather-app-beige-tau.vercel.app/"
                target="_blank"
              >
                <button className="bg-purple-600 p-1.5 px-2 font-semibold rounded-md text-[16px]">
                  visit project
                </button>
              </a>
              <a
                href="https://github.com/rohit-selokar/weather-app"
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl mx-7"></i>
              </a>
            </div>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
