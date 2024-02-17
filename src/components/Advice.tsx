import divider from "../assets/pattern-divider-desktop.svg"
import dice from "../assets/icon-dice.svg"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Advice(){
    interface AdviceData {
        slip: {
          id: number;
          advice: string;
        };
      }

      const [advice, setAdvice] = useState<AdviceData>({
        slip: {
          id: 0,
          advice: "",
        }
      });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://api.adviceslip.com/advice")
            setAdvice(response.data)
        }

        fetchData()
    }, [])
    console.log(advice)

    return <section className=" bg-[#313a49] rounded-2xl sm:w-1/4 w-11/12">
        <div className="flex justify-center mx-7 mt-7">
            <h2 className="text-[#4acf92] font-semibold tracking-normal text-xs">{`A D V I C E  # ${advice.slip.id}`}</h2>
        </div>

        <div className="flex justify-between mx-7 mt-4 mb-8">
            <p className="text-[#cbe0e6] font-bold text-xl">{`"${advice.slip.advice}"`}</p>
        </div>
        <div className="mx-7 mb-7">
            <img src={divider} alt="" />
        </div>
        <div className="flex items-center justify-center mb-7">
        <button onClick={() => {
            const fetchData = async () => {
                const response = await axios.get("https://api.adviceslip.com/advice")
                setAdvice(response.data)
            }
            fetchData()
        }} className="bg-[#2a905d] rounded-full hover:bg-[#3bfc9b] transition-colors duration-300 hover:animate-pulse">
            <img className="p-2" src={dice} alt="" />
        </button>
        </div>
    </section>
}