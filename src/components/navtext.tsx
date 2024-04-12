const Navtext = (props: {text:string}) => {
    return (
        <p className={`text-sm text-green-800 px-4 hover:text-slate-800 cursor-pointer`}>{props.text}</p>
    );
}

export default Navtext;