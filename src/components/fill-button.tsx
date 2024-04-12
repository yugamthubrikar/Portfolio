const FillButton = (props: {btntitle: string}) => {
    return(
        <button className={`py-2 w-32  bg-green-800 text-white my-3 rounded-full`}>{props.btntitle}</button>
    );
}

export default FillButton;