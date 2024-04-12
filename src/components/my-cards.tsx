import { StaticImageData } from "next/image";

const MyCards = (props : {icon: StaticImageData,heading: string, para: string}) =>{
    return(
        <div className="grid justify-items-center w-[13.35rem] ">
            <img className="w-[30px]" src={props.icon.src} alt="" />
            <h3 className="font-bold">{props.heading}</h3>
            <p className="text-center" >{props.para}</p>
        </div>
    )
}
export default MyCards;