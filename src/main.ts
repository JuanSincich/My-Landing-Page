import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { request } from "http";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Backend del formulario funcionando");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Backend del formulario de contacto está funcionando!");
});

app.post("/contact", async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error("Error al enviar el correo:", error);

    res.status(500).json({
      message:
        "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de contacto escuchando en el puerto ${PORT}`);
  console.log(`URL de prueba: http://localhost:${PORT}/`);
});
