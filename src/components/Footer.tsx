import React from 'react'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 text-3xl drop-shadow-default">
      <div>
        Made by JV -{' '}
        <a
          className="border-b-2 border-amber-400 text-amber-400 transition-all duration-300 hover:border-amber-500 hover:text-amber-500"
          href="https://github.com/jv-vogler/voltorb-flip"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div className="flex gap-1">
        <p className="translate-y-1.5">&copy;</p>
        {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
