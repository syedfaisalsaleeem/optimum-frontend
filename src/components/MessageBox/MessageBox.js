const MessageBox = (props) => {
    console.log(props.message)
    return (
        <>
            <div>
                <p> {props.message} </p>
            </div>
        </>
    );

};

export default MessageBox;