import ErrorPages from "../component/ErrorPages";

const E503 = () => {

    const dataErrors = {
        title: '503 - Sābisu wa riyō dekimasen',
        code:'503',
        descJpn: 'エラー503, サービスは利用できません！', 
        descEng: 'Error 503, Service Unavailable!', 
        info: 'The server is temporarily busy, try again later.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E503