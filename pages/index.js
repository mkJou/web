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
          At the moment my website is under renovation. You can contact me through my social networks or through my email: <a href="mailto:hello@itsjoalex.com">hello@itsjoalex.com</a>. Greetings!
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
