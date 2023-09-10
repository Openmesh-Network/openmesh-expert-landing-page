/* eslint-disable no-unused-vars */
'use client'

import L3AContributors from '@/components/About/L3AContributors'
import ScrollUp from '@/components/Common/ScrollUp'
import Hero from '@/components/Hero'
import SuccessStories from '@/components/SuccessStories'
import { Inter } from '@next/font/google'
import { useRef } from 'react'
import { RevealWrapper } from 'next-reveal'
import Techs from '@/components/Techs'
import Consulting from '@/components/Consulting'
import CTA from '@/components/CTA'
import Articles from '@/components/Plataforms'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pricingRef = useRef(null)
  const contributorsRef = useRef(null)
  const tallyFormsRef = useRef(null)

  return (
    <>
      <ScrollUp />
      <Hero />
      <Articles />
      <SuccessStories />
    </>
  )
}
