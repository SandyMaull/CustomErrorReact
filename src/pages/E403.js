import ErrorPages from "../component/ErrorPages";

const E403 = () => {

    const dataErrors = {
        title: '403 - Kinji rareta',
        code:'403',
        descJpn: 'エラー403, 禁じられた！', 
        descEng: 'Error 403, Forbidden!', 
        info: 'You dont have permission to access.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E403