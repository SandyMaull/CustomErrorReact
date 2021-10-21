import ErrorPages from "../component/ErrorPages";

const E500 = () => {

    const dataErrors = {
        title: '500 - Naibu sābāerā',
        code:'500',
        descJpn: 'エラー500, 内部サーバーエラー！', 
        descEng: 'Error 500, Internal Server Error!', 
        info: 'There is a problem with the resource you are looking for, and it cannot be displayed.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E500