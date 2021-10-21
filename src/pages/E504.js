import ErrorPages from "../component/ErrorPages";

const E504 = () => {

    const dataErrors = {
        title: '504 - Gētou~ei no Taimuauto',
        code:'504',
        descJpn: 'エラー503, ゲートウェイのタイムアウト！', 
        descEng: 'Error 504, Gateway Timeout!', 
        info: "The server didn't respond in time."
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E504