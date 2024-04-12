const AboutCards = (props: {title:string, heading:string, para: string, message: string}) => {
    return (
        <div className="p-[2px] border border-dashed border-green-900">
            <h1>{props.title}</h1>
            <p>{props.heading}</p>
            <p>{props.para}</p>
            <p>{props.message}</p>
        </div>
    );
}

export default AboutCards;