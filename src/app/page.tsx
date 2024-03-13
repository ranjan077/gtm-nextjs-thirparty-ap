'use client'
import {useEffect} from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    document.cookie = "thisIsThirdPartyIframeCookie=yyy; path=/";
}, [])
  return (
    <>
      <h1>This is third party page</h1>
    </>
  )
}
