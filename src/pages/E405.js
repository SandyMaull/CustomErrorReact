import ErrorPages from "../component/ErrorPages";

const E405 = () => {

    const dataErrors = {
        title: '405 - Kyoka sa rete inai mesoddo',
        code:'405',
        descJpn: 'エラー405, 許可されていないメソッド！', 
        descEng: 'Error 405, Method Not Allowed!', 
        info: 'The request method is inappropriate.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E405