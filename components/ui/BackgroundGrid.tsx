import React from 'react'

const BackgroundGrid = () => {
  return (
    <div
    className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
>
    {/* Radial gradient for the container to give a faded look */}
    <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"

    />

</div>
  )
}

export default BackgroundGrid
