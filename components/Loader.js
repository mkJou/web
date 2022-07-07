import React, { useState, useEffect } from 'react'
import anime from 'animejs'

const Loader = ({ finishLoading }) => {
  const [isMounted, setisMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setisMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  })

  return (
    <div className="loader" isMounted={isMounted}>
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <div className="justfy-align-text align-center flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1"
              className="w-32 fill-black dark:fill-white"
              viewBox="0 0 1280 1280"
            >
              <path
                d="M6500 10119c-492-473-921-886-952-917l-57-57 9-645c5-355 11-782 15-949l5-303-522 6-523 7-912-902-913-901V1690h373c204 1 1438 11 2740 24l2369 23 719 719 719 719v7792l-652 6c-359 4-849 7-1088 7h-435l-895-861zm2720-349v-840H7660v1680h1560v-840zm0-2407c0-714-3-1868-7-2565l-6-1268H7846c-749 0-1736 3-2193 7l-833 6v3327h1530V4997l197 6c108 4 405 7 660 7h463v3650h1550V7363z"
                transform="matrix(.1 0 0 -.1 0 1280)"
              ></path>
            </svg>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex animate-pulse items-center justify-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
