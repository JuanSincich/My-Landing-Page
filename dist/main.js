"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Backend del formulario funcionando");
});
app.get("/", (req, res) => {
    res.send("Backend del formulario de contacto está funcionando!");
});
app.post("/contact", async (req, res) => {
    // <-- Importante: Asegúrate de que la función sea 'async' aquí también
    const { name, email, message } = req.body;
    try {
        // Objeto con los detalles del correo a enviar
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Mensaje de contacto de ${name} (Portafolio)`,
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
        };
        await transporter.sendMail(mailOptions);
        console.log("Correo enviado con éxito!");
        res.status(200).json({
            message: "Formulario recibido y correo enviado correctamente, ¡gracias!",
        });
    }
    catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({
            message: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor de contacto escuchando en el puerto ${PORT}`);
    console.log(`URL de prueba: http://localhost:${PORT}/`);
});
