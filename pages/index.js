import React, { useState, useEffect } from 'react'

import Image from 'next/image'

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

import siteMetadata from '@/data/siteMetadata'
import brandsData from '@/data/brandsData'
import projectsData from '@/data/projectsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'

/** Swiper JS */
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { Autoplay, EffectCards, Navigation } from 'swiper'

const MAX_DISPLAY = projectsData.length

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* Section: HOME */}
      <section
        id="home"
        className="mx-auto max-w-3xl justify-center px-4 pt-52 text-center md:max-w-5xl"
      >
        <span>Hey there! Welcome to my page.</span>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Joalex Urdaneta
        </h1>
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Web Developer
          </span>
        </h2>
        <p className="wrap lg:px-30 justify-center pt-6 md:px-20 xl:px-40">
          I’m a web developer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible, human-centered
          products.
          <br />
          ¿See you of me?
        </p>
        <div className="justfy-align-text align-center flex animate-[wiggle_1s_ease-in-out_infinite] items-center justify-center pt-36 pb-0 sm:pt-40">
          <a
            className="align-center transform items-center justify-center space-x-2 text-center duration-300 hover:scale-110"
            href="#about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-8 w-8 animate-bounce justify-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>

      <div className="inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="-mb-1 w-full fill-gray-100 dark:fill-gray-800"
          viewBox="0 0 900 100"
        >
          <path
            fill="#262626"
            strokeLinecap="round"
            d="M0 54l10 2.2c10 2.1 30 6.5 50 5.5s40-7.4 60-8.9 40 1.9 60 2.5c20 .7 40-1.3 60 2.2s40 12.5 60 13.7c20 1.1 40-5.5 60-11.7 20-6.2 40-11.8 60-16.8s40-9.4 60-5.7 40 15.3 60 16.7c20 1.3 40-7.7 60-8.7 20-1 40 6 60 7.2 20 1.1 40-3.5 60-.4C740 55 760 66 780 65s40-14 60-19.7c20-5.6 40-4 50-3.1l10 .8v58H0z"
          ></path>
        </svg>
      </div>

      {/* Section: ABOUT */}
      <section
        id="about"
        className="align-center items-center bg-gray-100 py-20 text-justify dark:bg-gray-800 sm:text-left lg:h-screen lg:py-32"
      >
        <div className="container mx-auto max-w-3xl px-6 py-8 sm:px-6 lg:pt-0 xl:max-w-6xl">
          <div className="grid grid-cols-1 items-center sm:flex">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-8xl md:leading-14">
                About{' '}
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  me
                </span>
              </h2>

              <p className="lg:max-w-1xl text-justify text-gray-500 dark:text-gray-400 sm:text-xl">
                Self-taught Web developer, committed, passionate and motivated by his field with a
                great capacity for self-learning in whatever is necessary to develop a solution,
                combining my complementary training with my commitment to high performance and
                organized work.
              </p>

              <div className="py-6">
                <ul className="grid grid-cols-2 items-center gap-4">
                  {brandsData.map((brand) => (
                    <li key={brand.framework} className="flex items-center gap-2">
                      <div>{brand.svg}</div>
                      <span>{brand.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-1 items-center space-y-3 text-center sm:grid-cols-2 sm:space-y-0 sm:space-x-3">
                <a
                  href="/resume.pdf"
                  target={'_blank'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3.5 font-bold text-black shadow-sm hover:shadow-white focus:outline-none focus:ring-4 "
                >
                  <span>Download Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
                <Link
                  href={'/about'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3.5 text-base font-bold text-white shadow-sm hover:shadow-black focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <span>More about me</span>
                  <svg
                    className="h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <Image
                    className="h-80 w-80 flex-shrink-0 rounded-full object-cover dark:shadow-xl sm:h-[28rem] sm:w-[28rem]"
                    src="/static/images/joalex.png"
                    width={500}
                    height={500}
                    alt="Joalex Urdaneta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="inset-x-0 bottom-0 pb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          version="1.1"
          viewBox="0 0 900 100"
        >
          <path
            fill="#262626"
            strokeLinecap="round"
            d="M0 44l10-2.2c10-2.1 30-6.5 50-5.5s40 7.4 60 8.9 40-1.9 60-2.5c20-.7 40 1.3 60-2.2s40-12.5 60-13.7c20-1.1 40 5.5 60 11.7 20 6.2 40 11.8 60 16.8s40 9.4 60 5.7 40-15.3 60-16.7c20-1.3 40 7.7 60 8.7 20 1 40-6 60-7.2 20-1.1 40 3.5 60 .4C740 43 760 32 780 33s40 14 60 19.7c20 5.6 40 4 50 3.1l10-.8V0H0z"
          ></path>
        </svg>
      </div>

      {/* Section: PROJECTS */}
      <section
        id="projects"
        className="align-center items-center bg-transparent py-20 lg:h-screen lg:py-32"
      >
        <div className="container mx-auto max-w-3xl items-center px-4 xl:max-w-6xl xl:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="600"
            version="1.1"
            className="absolute right-10 overflow-hidden"
            viewBox="0 0 900 600"
          >
            <path
              fill="none"
              stroke="#889fbb"
              d="M0-83l71.9 41.5v83L0 83l-71.9-41.5v-83z"
              transform="translate(241 385)"
            ></path>
            <path
              fill="none"
              stroke="#889fbb"
              d="M0-74l64.1 37v74L0 74l-64.1-37v-74z"
              transform="translate(743 309)"
            ></path>
            <path
              fill="none"
              stroke="#889fbb"
              d="M0-53l45.9 26.5v53L0 53l-45.9-26.5v-53z"
              transform="translate(797 498)"
            ></path>
            <path
              fill="none"
              stroke="#889fbb"
              d="M0-57l49.4 28.5v57L0 57l-49.4-28.5v-57z"
              transform="translate(615 426)"
            ></path>
            <path
              fill="none"
              stroke="#889fbb"
              d="M0-59l51.1 29.5v59L0 59l-51.1-29.5v-59z"
              transform="translate(538 106)"
            ></path>
          </svg>
          <div className="grid w-full grid-cols-1 items-center sm:grid-cols-2 sm:gap-8 ">
            <div className="py-16 px-4">
              <h2 className="z-1 mb-4 text-left text-5xl font-extrabold tracking-wide text-gray-900 dark:text-white sm:text-justify sm:text-8xl">
                Things he{' '}
                <span className="bg-gradient-to-r from-teal-200 to-teal-600 bg-clip-text text-transparent">
                  created
                </span>
              </h2>
              <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl">
                Here we focus on the latest projects / work that I have launched.
              </p>
              <Link
                href={`/works`}
                className="flex items-center gap-3 text-teal-400 hover:text-teal-300"
              >
                <span>Other projects you want to see</span>
                <svg
                  className="h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="align-center items-center justify-center text-center">
              <div className="flex items-center justify-center gap-3 pb-2 text-center text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 fill-gray-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
                  ></path>
                </svg>
                <span>One touch and swipe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 fill-gray-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                  ></path>
                </svg>
              </div>
              <Swiper
                effect={'cards'}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                modules={[Autoplay, EffectCards]}
                className="align-center flex h-[26rem] w-72 items-center justify-center rounded-lg sm:h-[26rem] sm:w-80"
              >
                {projectsData.map((project) => (
                  <SwiperSlide
                    key={project.title}
                    className="justify-center rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:shadow-lg"
                  >
                    <a className="justify-center space-y-2" href={project.siteHref}>
                      <img className="overflow-hidden" src={project.imgSrc} alt="" />
                      <div>
                        <span className="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          Featured project
                        </span>
                        <div id="title" className="text-1xl font-bold tracking-tight">
                          {project.title}
                        </div>
                      </div>
                      <p className="px-5 text-justify text-xs" id="project-description">
                        {project.description}
                      </p>
                      <ol className="flex justify-between px-5 text-xs text-gray-500">
                        {project.frameworks.main.map((framework) => (
                          <li key={framework} id={framework} className="flex  items-center gap-1">
                            <img
                              src={`/static/images/brands/${framework}.svg`}
                              alt=""
                              className="h-4"
                            />
                            {framework}
                          </li>
                        ))}
                      </ol>
                      <div className="px-5">
                        {project.isLearnWebsite ? (
                          <a
                            href={project.siteHref}
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-2 py-1.5 text-xs font-bold text-black shadow-sm hover:shadow-white focus:outline-none focus:ring-4"
                          >
                            Learn more
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        ) : (
                          <div className="flex justify-center gap-2">
                            <a
                              href={project.siteHref}
                              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-2 py-1.5 text-xs font-bold text-black shadow-sm hover:shadow-white focus:outline-none focus:ring-4"
                            >
                              Visit demo
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                            <a
                              href={project.repoHref}
                              className={`${
                                project.getRepo ? 'block' : 'hidden'
                              } flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-2 py-1.5 text-xs font-medium text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:shadow-black dark:focus:ring-gray-700`}
                            >
                              View code
                              <svg
                                className="h-5 w-5 fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                              >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className="inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="-mb-1 w-full fill-gray-100 dark:fill-gray-800"
          viewBox="0 0 900 100"
        >
          <path
            fill="#262626"
            strokeLinecap="round"
            d="M0 54l10 2.2c10 2.1 30 6.5 50 5.5s40-7.4 60-8.9 40 1.9 60 2.5c20 .7 40-1.3 60 2.2s40 12.5 60 13.7c20 1.1 40-5.5 60-11.7 20-6.2 40-11.8 60-16.8s40-9.4 60-5.7 40 15.3 60 16.7c20 1.3 40-7.7 60-8.7 20-1 40 6 60 7.2 20 1.1 40-3.5 60-.4C740 55 760 66 780 65s40-14 60-19.7c20-5.6 40-4 50-3.1l10 .8v58H0z"
          ></path>
        </svg>
      </div>

      {/* Section: WHAT-THE-NEXT */}
      <section
        id="contact"
        className="align-center items-center bg-gray-800 py-20 lg:h-max lg:pt-32"
      >
        <div className="container mx-auto max-w-3xl items-center px-4 text-center xl:max-w-6xl xl:flex-row">
          <div className="pt-14">
            <h2 className="z-1 mb-4 text-5xl font-extrabold tracking-wide text-gray-900 dark:text-white sm:text-8xl">
              Get in{' '}
              <span className="bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text text-transparent ">
                touch
              </span>
            </h2>
          </div>
          <div className="mx-auto max-w-screen-md gap-8 text-gray-900  dark:text-white">
            <p className="mb-8 sm:px-36">
              Anything to tell me, question/idea/project? My inbox will always be open, I will do my
              best to answer you!
            </p>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-orange-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Let's talk!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div></div>
      </section>
    </>
  )
}
