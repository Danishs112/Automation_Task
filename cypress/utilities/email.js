const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: "",
    pass: "",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" danishsoma113@gmail.com', 
    to: "danishsoma112@gmail.com", 
    subject: "Hello ✔", 
    text: "Hello world?",
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);
