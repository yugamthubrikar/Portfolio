import { StaticImageData } from "next/image";
import Image from "next/image";

const MyCards = (props : {icon: string,heading: string, para: string}) =>{
    return(
        <div className="grid justify-items-center w-[13.35rem] ">
            <Image width={30} height={30} src={props.icon} alt="" />
            <h3 className="font-bold">{props.heading}</h3>
            <p className="text-center" >{props.para}</p>
        </div>
    )
}
export default MyCards;