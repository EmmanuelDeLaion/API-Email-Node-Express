const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jesuspin2626@gmail.com',
            pass: '*************'
        }
    });
    const mailOptions = {
        from: `”${formulario.nombre}” <${formulario.correo}>`,
        to: 'jesuspin26261@gmail.com',
        subject: 'Contacto',
        html: `
        <div style="position: relative;  padding: 10px; background: linear-gradient(to bottom, #A758AE, #786EC1);
        color: #fff; top: 50%;">
            <h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> ${formulario.nombre} </h1>
        </div>
        <div
            style=" padding: 10px;  position: relative; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <p> <span style="color: #A758AE; font-weight: bold;">Nombre: </span> <span style="color: #000;"> ${formulario.nombre} </span> </p>
            <p> <span style="color: #A758AE; font-weight: bold;">Correo: </span> <span style="color: #000;"> ${formulario.correo} </span> </p>
            <p> <span style="color: #A758AE; font-weight: bold;">Mensaje: </span> <span style="color: #000;"> ${formulario.mensaje} </span> </p>
            <p> <span style="color: #A758AE; font-weight: bold;">Número de teléfono: </span> <span style="color: #000;"> ${formulario.numero} </span> </p>
        </div>
        <footer
            style="position: relative; background-color: #12242B; padding: 15px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <p style=" color: #fff; text-align: center; font-size: 12px;">Emmanuel De León
            <br>
            <span style="text-align: center; font-size: 20px;">Tec</span> <span
            style="text-align: center; font-size: 20px; color: #A758AE;">Devs</span>
            </p>
        </footer>    
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}