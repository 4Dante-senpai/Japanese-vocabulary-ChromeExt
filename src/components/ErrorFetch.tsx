import ReturnButton from "./ReturnButton";
import React from "react";
import apiErrorFetch from "../interfaces/apiErrorFetch";


const ErrorFetch: React.FC<apiErrorFetch> = ( {err, alphabet, category } ) => {
    return(
        <div className="words">
            {err.includes('category') ?
                (<div>
                    <ReturnButton />
                    <div className="errorDiv">
                        <h4>No se encontr&oacute; nada escrito en {alphabet} con la categor&iacute;a {category}.</h4>
                    </div>
                </div>) 
            :
                (<div> 
                    <ReturnButton />
                    <div className="errorDiv">
                        <h4>El servidor no responde. Intente m&aacute;s tarde.</h4>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ErrorFetch;