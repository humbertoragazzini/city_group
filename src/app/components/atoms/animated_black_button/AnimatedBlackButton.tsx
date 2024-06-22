"use client";
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default function AnimatedBlackButton(props:any) {

  const router = useRouter();

  return (
            <Link href={'/our_services'} className={"text-center text-2xl text-bold text-white w-max block mt-5 "+styles.visite_our_services} onMouseEnter={(e)=>{}}>
                <div className={'w-max relative '+styles.btn_content}>
                <hr className={'lines_to_draw absolute '+styles.top_border+' '+styles.solid}></hr>
                <div className={'lines_to_draw absolute left-0 '+styles.left_border+' '+styles.solid}></div>

                <hr className={'lines_to_draw absolute '+styles.top_border}></hr>
                <div className={'lines_to_draw absolute left-0 '+styles.left_border}></div>
                    <span className='absolute w-full'>{props.text}</span>
                <div className={'lines_to_draw absolute right-0 '+styles.rigth_border+' '+styles.solid}></div>
                <hr className={'lines_to_draw absolute '+styles.bottom_border+' '+styles.solid}></hr>

                <div className={'lines_to_draw absolute right-0 '+styles.rigth_border}></div>
                <hr className={'lines_to_draw absolute '+styles.bottom_border}></hr>
                </div>
            </Link>

        )
}
