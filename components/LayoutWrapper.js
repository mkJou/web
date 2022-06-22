import React, { useState, useEffect } from 'react'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Loader from './Loader'

import { PageSEO } from '@/components/SEO'

const LayoutWrapper = ({ children }) => {
  const isHome = '/'
  const [isLoading, setIsLoading] = useState(isHome)

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  useEffect(() => {
    if (isLoading) {
      return
    }

    handleExternalLinks()
  }, [isLoading])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div id="root">
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <div id="sectionContainer">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <header className="flex items-center justify-between py-10">
                <div>
                  <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between">
                      <div className="mr-3">
                        {/*<Logo />*/}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1"
                          className="h-16 fill-black dark:fill-white"
                          viewBox="0 0 1280 1280"
                        >
                          <path
                            d="M6500 10119c-492-473-921-886-952-917l-57-57 9-645c5-355 11-782 15-949l5-303-522 6-523 7-912-902-913-901V1690h373c204 1 1438 11 2740 24l2369 23 719 719 719 719v7792l-652 6c-359 4-849 7-1088 7h-435l-895-861zm2720-349v-840H7660v1680h1560v-840zm0-2407c0-714-3-1868-7-2565l-6-1268H7846c-749 0-1736 3-2193 7l-833 6v3327h1530V4997l197 6c108 4 405 7 660 7h463v3650h1550V7363z"
                            transform="matrix(.1 0 0 -.1 0 1280)"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center text-base leading-5">
                  {/*<div className="hidden sm:block">
                    {headerNavLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>*/}
                  <ThemeSwitch />
                  <MobileNav />
                </div>
              </header>
            </div>
            <main className="mb-auto">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
                <div className="flex w-[108rem] flex-none justify-end">
                  <picture>
                    <source
                      srcSet="https://tailwindcss.com/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif"
                      type="image/avif"
                    />
                    <img
                      src="https://tailwindcss.com/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif"
                      alt=""
                      className="w-[71.75rem] max-w-none flex-none dark:hidden"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif"
                      type="image/avif"
                    />
                    <img
                      src="https://tailwindcss.com/_next/static/media/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif"
                      alt=""
                      className="hidden w-[90rem] max-w-none flex-none dark:block"
                    />
                  </picture>
                </div>
              </div>
              {children}
            </main>
            <Footer />
          </div>
        )}
      </div>
    </>
  )
}

export default LayoutWrapper

/* */
