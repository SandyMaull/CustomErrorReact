import ErrorPages from "../component/ErrorPages";

const E401 = () => {

    const dataErrors = {
        title: '401 - Mu kyoka',
        code:'401',
        descJpn: 'エラー401, 無許可！', 
        descEng: 'Error 404, Unauthorized!', 
        info: "Server Could'nt Verify That You are Authorized." 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E401