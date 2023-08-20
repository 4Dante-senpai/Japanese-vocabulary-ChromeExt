import ReturnButton from "../components/ReturnButton";
import "../styles/info.css"

const Info = ( ) => {
    return (
        <div className='Info'>
            <ReturnButton />
            <h1 id="vocabulary-title">Informaci&oacute;n</h1>
            <p>Esta pequeña extensi&oacute;n para tu navegador te servira para practicar diariamente tu vocabulario en japones 
                sin tener que dedicarle mucho tiempo</p>
            <p>Si encuentras alg&uacute;n error o quieres ayudarme a mejorar la aplicaci&oacute;n.
            </p>
            <p>¡No dudes en contactarme!</p>
            <div>
                <p>Puedes contactarme entrnado al siguiente link.
                    <a className="infoLink" href="https://github.com/4Dante-senpai/Japanese-vocabulary-ChromeExt" target="_blank" rel="noopener">
                        ¡Contactame!
                    </a>
                </p>
                
            </div>
        </div>
    )
}

export default Info;