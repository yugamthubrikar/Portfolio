const QualityCards = (props: {title:string, para: string}) => {
    return (
        <div className="p-[40px] border border-dashed border-green-900">
            <h1>{props.title}</h1>
            <p>{props.para}</p>
        </div>
    );
}

export default QualityCards;