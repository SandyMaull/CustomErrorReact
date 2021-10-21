import ErrorPages from "../component/ErrorPages";

const E404 = () => {

    const dataErrors = {
        title: '404 - Mitsukarimasen',
        code:'404',
        descJpn: 'エラー404, ページが見つかりません！', 
        descEng: 'Error 404, Page Not Found!', 
        info: 'The requested URL was not found on this server.' 
    }

    
    console.log(dataErrors);
    return (
        <ErrorPages 
            props={dataErrors}
        />
    )
}

export default E404