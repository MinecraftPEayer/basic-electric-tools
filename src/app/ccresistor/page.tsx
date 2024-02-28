'use client'
import local from 'next/font/local'
import dynamic from 'next/dynamic';
const Main = dynamic(() => import('@/app/ccresistor/components/main'), { ssr: false })

import ArrowForward from '@/assets/icons/svg/arrow_forward.svg'
import '@/app/globals.css';
import { useEffect, useState } from 'react';

const localFont = local({ src: '../../assets/fonts/product_sans.ttf' })

const CcResistor = () => {
    return (<Main />)
}

export default CcResistor;