import ErrorPages from "../component/ErrorPages";

const E400 = () => {

    const dataErrors = {
        title: '400 - Yookyuu no keishiki ga tadashiku arimasen',
        code:'400',
        descJpn: 'エラー400, 要求の形式が正しくありません！', 
        descEng: 'Error 400, Bad Request!', 
        info: 'Server Cannot Understand the Request you sent.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E400