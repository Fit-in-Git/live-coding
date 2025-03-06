import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL, // Eure Google Mail Adresse
        pass: process.env.PASSWORD // Euer Google App-Passwort
    }
});

const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "eure-email@example.com", // Empfänger E-Mail-Adresse
    subject: "Hello ✔", // Betreff
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
})

console.log("E-Mail verschickt!");
