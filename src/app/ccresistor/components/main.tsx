'use client'
import local from 'next/font/local'
import cookies from 'js-cookies';

import ArrowForward from '@/assets/icons/svg/arrow_forward.svg'
import Close from '@/assets/icons/svg/close.svg'
import Refresh from '@/assets/icons/svg/refresh.svg'
import GitHubIcon from '@/assets/icons/svg/github.svg'
import '@/app/globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image'

function generateResistor(): number[] {
    const error = Math.floor(Math.random() * 12);

    const color = [
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 10),
        error === 10 ? -1 : error === 11 ? -2 : error,
    ]
    return color;
}

function generateResistorColor(color: number[]): string[] {
    let returnColor: string[] = []
    color.forEach(value => {
        let returnValue;
        switch (value) {
            case 0:
                returnValue = 'bg-black';
                break;
            case 1:
                returnValue = 'bg-resistor-brown';
                break;
            case 2:
                returnValue = 'bg-resistor-red';
                break;
            case 3:
                returnValue = 'bg-resistor-orange';
                break;
            case 4:
                returnValue = 'bg-resistor-yellow';
                break;
            case 5:
                returnValue = 'bg-resistor-green';
                break;
            case 6:
                returnValue = 'bg-resistor-blue';
                break;
            case 7:
                returnValue = 'bg-resistor-purple';
                break;
            case 8:
                returnValue = 'bg-resistor-gray';
                break;
            case 9:
                returnValue = 'bg-resistor-white';
                break;
            case -1:
                returnValue = 'bg-resistor-gold';
                break;
            case -2:
                returnValue = 'bg-resistor-silver';
                break;

        }
        if (!returnValue) return;
        returnColor.push(returnValue);
    })
    return returnColor;
}

function generateResistorValue(resistor: number[]): string[] {
    let returnColor: string[] = []
    resistor.forEach(value => {
        let returnValue;
        switch (value) {
            case 0:
                returnValue = '黑';
                break;
            case 1:
                returnValue = '棕';
                break;
            case 2:
                returnValue = '紅';
                break;
            case 3:
                returnValue = '橙';
                break;
            case 4:
                returnValue = '黃';
                break;
            case 5:
                returnValue = '綠';
                break;
            case 6:
                returnValue = '藍';
                break;
            case 7:
                returnValue = '紫';
                break;
            case 8:
                returnValue = '灰';
                break;
            case 9:
                returnValue = '白';
                break;
            case -1:
                returnValue = '金';
                break;
            case -2:
                returnValue = '銀';
                break;

        }
        if (!returnValue) return;
        returnColor.push(returnValue);
    })
    return returnColor;
}

function checkAnswer(input: string, resistor: number[]): boolean {
    let answer = parseFloat((((resistor[0] * 10) + resistor[1]) * (10 ** resistor[2])).toFixed(2))

    console.log(input)
    console.log(isNaN(Number(input)))
    if (isNaN(Number(input))) {
        let digit = input.slice(input.length - 1)
        let unit;
        console.log(input.slice(0, input.length - 1))
        switch (digit) {
            case 'T':
                unit = 12;
                break;
            case 'G':
                unit = 9;
                break;
            case 'M':
                unit = 6;
                break;
            case 'k':
                unit = 3;
                break;
            case 'm':
                unit = -3;
                break;
            case 'u':
                unit = -6;
                break;
            case 'n':
                unit = -9;
                break;
            case 'p':
                unit = -12;
                break;
            default:
                return false
        }
        let num = Number(input.slice(0, input.length - 1))
        console.log(num)
        if (num * (10 ** unit) === answer) return true
        else return false
    } else {
        if (Number(input) === answer) return true
        else return false
    }
}

const localFont = local({ src: '../../../assets/fonts/product_sans.ttf' })

const Main = () => {
    let answer = ''
    let confirm = ''
    const [detailOpen, setDetailOpen] = useState(false);

    const [resistor, setResistor] = useState(generateResistor());
    const [resistorColor, setResistorColor] = useState(generateResistorColor(resistor));
    const [resistorValue, setResistorValue] = useState(generateResistorValue(resistor));

    const [correct, setCorrect] = useState(false);

    let correctRate = Number((isNaN(((cookies.getItem('correct') ?? 0) / (cookies.getItem('questions') ?? 0)) * 100) ? 0 : ((cookies.getItem('correct') ?? 0) / (cookies.getItem('questions') ?? 0)) * 100).toFixed(2))

    useEffect(() => {
        setResistorColor(generateResistorColor(resistor))
        setResistorValue(generateResistorValue(resistor))
    }, [resistor])

    return (
        <div className={`${localFont.className} bg-[#120D00] w-full h-screen`}>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 w-[27.5rem] bg-[#ffb700] rounded-xl z-20 transition duration-300 ${detailOpen ? '-translate-x-[80%]' : ''}`}>
                    <div className='bg-[#ffd737] h-16 w-80 rounded-full flex z-20 mt-10 relative left-10'>
                        <div className={`h-16 w-5 ${resistorColor[0]} ml-8 hover:h-[calc(100%+2rem)] transition-all hover:-translate-y-4 [&:hover>:nth-child(1)]:opacity-100 relative`}>
                            <p className={`absolute top-4 opacity-0 text-xl/[64px] transition ${resistor[0] === 4 || resistor[0] === 5 || resistor[0] === 9 ? 'text-black' : ''}`}>{resistorValue[0]}</p>
                        </div>
                        <div className={`h-16 w-5 ${resistorColor[1]} ml-6 hover:h-[calc(100%+2rem)] transition-all hover:-translate-y-4 [&:hover>:nth-child(1)]:opacity-100 relative`}>
                            <p className={`absolute top-4 opacity-0 text-xl/[64px] transition ${resistor[1] === 4 || resistor[1] === 5 || resistor[1] === 9 ? 'text-black' : ''}`}>{resistorValue[1]}</p>
                        </div>
                        <div className={`h-16 w-5 ${resistorColor[2]} ml-6 hover:h-[calc(100%+2rem)] transition-all hover:-translate-y-4 [&:hover>:nth-child(1)]:opacity-100 relative`}>
                            <p className={`absolute top-4 opacity-0 text-xl/[64px] transition ${resistor[2] === 4 || resistor[2] === 5 || resistor[2] === 9 ? 'text-black' : ''}`}>{resistorValue[2]}</p>
                        </div>
                        <div className={`h-16 w-5 bg-resistor-gold ml-32 hover:h-[calc(100%+2rem)] transition-all hover:-translate-y-4 [&:hover>:nth-child(1)]:opacity-100 relative`}>
                            <p className='absolute top-4 opacity-0 text-xl/[64px] transition'>金</p>
                        </div>
                    </div>
                    <div className='mt-10 absolute top-12 h-2 bg-resistor-wire z-10 w-[25rem]'></div>

                    <div className='mt-10 relative'>
                        <input type='text' id='answerInput' className='w-full h-16 bg-[#efad34] rounded-full text-xl font-bold pl-8 placeholder-black absolute' placeholder='輸入你的答案...' onChange={(e) => {
                            answer = e.target.value
                        }} />
                        <ArrowForward className={`absolute left-[21.5rem] top-3 w-10 h-10 bg-[#efad34] hover:bg-[#e89e2e] rounded-full p-2 transition-all ${detailOpen ? 'hidden' : 'block'}`} autocomplete='off' onClick={(e: any) => {
                            confirm = answer
                            let cor = checkAnswer(confirm, resistor)
                            setCorrect(cor)
                            if (cor) cookies.setItem('correct', parseInt(cookies.getItem('correct') ?? 0) + 1, { expires: 365 })
                            else cookies.setItem('wrong', parseInt(cookies.getItem('wrong') ?? 0) + 1, { expires: 365 })
                            setDetailOpen(true)
                            let question = cookies.getItem('questions') ?? 0;
                            cookies.setItem('questions', ++question, { expires: 365 })
                        }} />
                        <Refresh className={`absolute left-[21.5rem] top-3 w-10 h-10 bg-[#efad34] hover:bg-[#e89e2e] rounded-full p-2 transition-all ${detailOpen ? 'block' : 'hidden'}`} onClick={(e: any) => {
                            setDetailOpen(false)
                            const answerInput = document.getElementById('answerInput') as HTMLInputElement;
                            answerInput.value = '';
                            setResistor(generateResistor())
                        }} />
                        <div className='p-5 pt-20'>
                            <p className='text-black'>你已經回答了 <b className='text-black'>{cookies.getItem('questions') ?? 0}</b> 題題目</p>
                            <div className='flex mt-2'>
                                <div className='mr-10'>
                                    <p className='text-gray-500'>正確/錯誤</p>
                                        <p className={`${`${cookies.getItem('correct') ?? 0}/${cookies.getItem('wrong') ?? 0}`.length > 5 ? 'text-5xl/[60px]' : 'text-6xl'} text-gray-600`}>{`${cookies.getItem('correct') ?? 0}/${cookies.getItem('wrong') ?? 0}`}</p>
                                </div>
                                <div>
                                    <p className='text-gray-500'>答對率</p>
                                    <p className={`${String(correctRate).length > 4 ? 'text-5xl/[60px]' : 'text-6xl'} ${correctRate <= 20 && correctRate !== 0 ? 'text-red-600' : correctRate >= 80 ? 'text-green-600' : 'text-gray-600'}`}>{correctRate}<span className='text-3xl text-gray-700'>%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-[27.5rem] h-[22.5rem] ${correct ? 'bg-[#0FB900]' : 'bg-[#B90600]'} rounded-xl z-10 transition-transform duration-300 ${detailOpen ? 'translate-x-[20%]' : ''}`}>
                    <div className="ml-52 px-5 flex">
                        <p className='text-xl/10'>{correct ? '正確!' : '錯誤!'}</p>
                        <Close className="absolute right-1 top-1 w-8 h-8" onClick={(e: any) => {
                            setDetailOpen(false)
                            const answerInput = document.getElementById('answerInput') as HTMLInputElement;
                            answerInput.value = '';
                            setResistor(generateResistor())
                        }} />
                    </div>
                    <div className='absolute top-10 bottom-5 rounded-xl h-[calc(100%-60px)] w-[14.5rem] bg-[#EDAA00] ml-52 py-3 pl-5 pr-2'>
                        <div className={`${detailOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <p className='text-gray-600 text-xl/5'>正確答案:</p>
                            <p className={`${(((resistor[0] * 10) + resistor[1]) * (10 ** resistor[2]) >= 100000000) || (((resistor[0] * 10) + resistor[1]) * (10 ** resistor[2])) ? 'text-3xl' : 'text-4xl'} text-gray-700 overflow-hidden`}>{parseFloat((((resistor[0] * 10) + resistor[1]) * (10 ** resistor[2])).toFixed(2))} <b className='text-gray-600'>Ω</b></p>

                            <p className='text-gray-600 text-xl/5 mt-5'>算式:</p>
                            <p className='text-2xl text-gray-700'>({resistor[0]} * 10 + {resistor[1]}) * 10^{resistor[2]}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 absolute h-16 w-[27.5rem]'>
                    <a href='https://github.com/MinecraftPEayer/basic-electric-tools' className='absolute flex  my-2 h-[48px] left-1/2 -translate-x-1/2'>
                        <GitHubIcon className={'fill-white'} width={48} height={48} alt='GitHub'/>
                        <p className='text-xl/[48px] ml-2 text-white'><b>檢視原始碼</b></p>
                    </a>
                    <p className='absolute flex my-2 h-[32px] left-1/2 -translate-x-1/2 mt-[56px] text-gray-300'><b>如有BUG/建議歡迎回報</b></p>
                </div>
            </div>
        </div>
    );
}

export default Main;
