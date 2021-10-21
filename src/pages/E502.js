import ErrorPages from "../component/ErrorPages";

const E502 = () => {

    const dataErrors = {
        title: '502 - Warui gētou~ei',
        code:'502',
        descJpn: 'エラー502, 悪いゲートウェイ！', 
        descEng: 'Error 502, Bad Gateway!', 
        info: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E502