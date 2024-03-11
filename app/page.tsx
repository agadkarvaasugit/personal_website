import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-normal ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono font-mono lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          vaasu agadkar&nbsp;
          <code className="font-mono font-bold"> 🖥️</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-41 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/agadkarvaasu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin -{" "}
            <Image
              src="/linkedin.svg"
              alt="Linkedin  Logo"
              className="dark:invert"
              width={19}
              height={10}
              priority
            />
          </a>
        </div>
        <div className="fixed bottom-0 left-0 flex h-41 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/agadkarvaasugit"
            target="_blank"
            rel="noopener noreferrer"
          >
            github -{" "}
            <Image
              src="/github.svg"
              alt="Github Logo"
              className="light:invert"
              width={19}
              height={10}
              priority
            />
          </a>
        </div>
        <div className="fixed bottom-0 left-0 flex h-41 w-full items-end justify-center bg-gradient-to-t  lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-4 p-8 lg:pointer-events-auto lg:p-0"
            href="https://drive.google.com/file/d/1ck-2J0XzjF2F2Af_50_nEHin_sTuB2tq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume -{" "}
            <Image
              src="resume.svg"
              alt="Resume Logo"
              className="dark:invert"
              width={13}
              height={10}
              priority
            />
          </a>
        </div>
        <div className="fixed bottom-0 left-0 flex h-41 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://linktr.ee/agadkarvaasucontact"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact -{" "}
            <Image
              src="/contact.svg"
              alt="Contact Logo"
              className="light:invert"
              width={19}
              height={10}
              priority
            />
          </a>
        </div>
      </div>
      <div className="mb-102 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div className="group rounded-lg border border-transparent px-7 py-7 ">
          <h2 className="mb-3 text-1xl font-mono">
            <span className=""></span>
          </h2>
          <div className="font-mono opacity-50">
            <div className="flex justify-between items-center">
              <p className="pt--100"></p>
              <div className="flex"></div>
            </div>
            <p className=""></p>
            <div className="">
              <p className="pt--100"></p>
              <div className="flex"></div>
            </div>
            <p className=""></p>
          </div>
        </div>
      </div>
      <div className="mb-102 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div className="fixed bottom-0 left-0 flex h-41 w-full items-end justify-center  from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            className="relative "
            src="/moving.gif"
            alt="Next.js Logo"
            width={400}
            height={500}
            priority
          />
        </div>
        <a
          className="group rounded-lg border border-transparent px-20 py-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-mono`}>
            about 👨🏽‍💻{" "}
            <span
              className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              suppressHydrationWarning={true}
            >
              -&gt;
            </span>
          </h2>
          <p className={` font-mono opacity-50`}>
          Hi there, I'm Vaasu, a software engineer with an interest in finance and data science. 
          For me, the dynamic nature of financial markets presents fascinating challenges, and
          I'm drawn to the opportunities it offers for analytical exploration. Whether it's 
          analyzing market trends, developing algorithms for risk assessment, or crafting intuitive 
          interfaces for financial applications, I find myself constantly engaged in leveraging 
          computer and data science techniques to extract valuable insights. My projects primarily 
          revolve around uncovering actionable information from complex datasets, empowering decision-makers
          with the knowledge they need to navigate the ever-evolving financial landscape.
          </p>
        </a>
      </div>
      <div className="mb-102 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div className="group rounded-lg border border-transparent px-20 py-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-mono">
            experience 💼{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className="font-mono opacity-50">
            <div className="flex justify-between items-center">
              <p className="pt-5">
                Software Engineer Intern @ Raytheon Technologies
              </p>
              <div className="flex"></div>
            </div>
            <p className="n/a">May 2023 – Aug 2023</p>
            <p className="n/a">c, c++, java, jenkins, docker, git</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Developed comprehensive software enabling seamless
                communication among various aircraft infrared sensors, boosting
                data processing efficiency.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Facilitated the creation of multiple internal C/C++ libraries
                for sensors, enhancing compatibility, functionality, and
                end-to-end testing within the software ecosystem.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Improved development processes by implementing Jenkins CI/CD
                pipelines, automating testing, and deployment processes, while
                also conducting simulation-based testing on various flight
                scenarios for regression testing.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                AI/ML Research Fellow @ Raytheon Technologies
              </p>
              <div className="flex"></div>
            </div>
            <p className="n/a">Sep 2022 – May 2023</p>
            <p className="n/a">python, pytorch, tensorflow, scikit-learn</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍Accelerated the development of machine learning models focused
                on anomaly detection in network traffic, employing Python,
                TensorFlow, and Scikit-learn to deploy a scalable solution,
                resulting in improved cybersecurity measures and network
                integrity.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍Researched RSA cryptography using Python scripting to enhance
                data encryption techniques, while also investigating system
                vulnerabilities, proposing mitigation strategies, and
                integrating cryptographic insights into tools like Metasploit to
                bolster cybersecurity defenses.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">Software Engineer Intern @ AstraNav</p>
              <div className="flex"></div>
            </div>
            <p className="n/a">Jan 2022 – May 2022</p>
            <p className="n/a">java, c, c++, stm32</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Authored software for STM32 microcontrollers to control and
                synchronize multiple magnetic GPS components for data
                acquisition purposes.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Crafted detailed test cases to conduct regression testing on
                software, ensuring optimal performance and reliability.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Conducted extensive scenario-based testing on sensor equipped
                robots to assess sensor performance in varying magnetic field
                environments around college campus.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">Junior Data Scientist @ XLabs</p>
              <div className="flex"></div>
            </div>
            <p className="n/a">Jun 2020 – Aug 2020</p>
            <p className="n/a">python, scikit-learn, tensorflow, jupyter</p>
            <p className="n/a">Next.js, MongoDB, TypeScript, and TailwindCSS</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Implemented a recommendation system using collaborative
                filtering techniques in python with scikit-learn, enhancing user
                experience by providing personalized product suggestions based
                on historical interactions.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Utilized regression testing methodologies utilizing
                TensorFlow and Jupyter to analyze and validate the impact of
                product updates on performance metrics, ensuring product
                stability and reliability.
              </p>
              <div className="flex"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="pt-5">
                📍 Developed a full-stack application incorporating machine
                learning capabilities, leveraging Next.js, MongoDB, TypeScript,
                and TailwindCSS, to provide personalized product recommendations
                based on user interactions, enhancing user experience and
                engagement.
              </p>
              <div className="flex"></div>
            </div>
            <p className="n/a"></p>
          </div>
        </div>
      </div>
      <div className="mb-102 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div className="group rounded-lg border border-transparent px-20 py-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-mono">
            projects 💻{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className="font-mono opacity-50">
            <div className="flex justify-between items-center">
              <p className="pt-5">investment portfolio optimization</p>
              <div className="flex">
                <a
                  href="https://github.com/agadkarvaasugit/investment_portfolio_optimization"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
            <p className="n/a">python, pandas, scikit-learn</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">customer segmentation</p>
              <div className="flex">
                <a
                  href="https://github.com/agadkarvaasugit/customer_segmentation"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
            <p className="n/a">python, numpy, xgboost</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">black-scholes model for pricing options </p>
              <div className="flex">
                <a
                  href="https://github.com/agadkarvaasugit/black_scholes_model_options"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
            <p className="n/a">c++</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">credit risk prediction</p>
              <div className="flex">
                <a
                  href="https://github.com/agadkarvaasugit/credit_risk_prediction"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
            <p className="n/a">python, jupyter, pytorch</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">trading bot </p>
              <div className="flex">
                <a
                  href="https://github.com/agadkarvaasugit/trading_bot"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
            <p className="n/a">python, jupyter, alpha vantage</p>
            <div className="flex justify-between items-center">
              <p className="pt-5">personal website </p>
              <div className="flex">
                <a
                  href="https://github.com/agadkarvaasugit/personal_website"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
            <p className="n/a">react, css, next.js, typeScript, tailwindcss</p>
          </div>
        </div>
      </div>
    </main>
  );
}
