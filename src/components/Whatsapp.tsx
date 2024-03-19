import "../styles/Whatsapp.css"


function Whatsapp() {
    return (

        <body title="¿Podemos ayudarte?">
            <link rel="stylesheet" href="Whatsapp.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <a href="https://api.whatsapp.com/send?phone=573505656305" className="float" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
        </body>
    )
}

export default Whatsapp
