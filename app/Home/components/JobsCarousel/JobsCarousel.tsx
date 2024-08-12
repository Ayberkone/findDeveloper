'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      // className="next-arrow"
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

const JobsCarousel = () => {
  const jobs = [
    { title: 'IT Müdürü', company: 'Bosch', logo: '/images/logos/bosch.png' },
    { title: 'Front-end Developer', company: 'Aktif Bank', logo: '/images/logos/aktifbank.png' },
    { title: 'Back-end Developer', company: 'Akbank', logo: '/images/logos/akbank.png' },
    { title: '.net Developer', company: 'Arçelik', logo: '/images/logos/arcelik.png' },
    { title: 'Junior .net Developer', company: 'Allianz', logo: '/images/logos/allianz.png' },
    { title: 'Sales Manager', company: 'Bezmiâlem Vakıf Üniversitesi', logo: '/images/logos/bezmia.png' }
  ]

  // Settings for the slider
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <h2 className="text-8 unit-title mb-16 flex items-center">Öne çıkan iş ilanları</h2>
      <Slider {...settings}>
        {jobs.map((job) => (
          <div key={job.logo} className="slick-div shadow rounded text-center">
            <h3 className="font-size-20 text-ellipsis">{job.title}</h3>
            <p className="font-size-16 text-ellipsis">{job.company}</p>
            <div className="relative w-full h-10 mb-2">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default JobsCarousel
