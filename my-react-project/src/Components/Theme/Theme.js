
function Theme () {
    const exitApp = () => {
        navigator.app.exitApp();
        console.log(exitApp, 'knappen trycktes!')
    }
    return (
        <div>
            <input type="button" onClick={() => exitApp()} value="Exit app?"/>
        </div>
    )
}

export default Theme;
