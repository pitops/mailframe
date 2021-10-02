const { MailFrame } = require("@mailframe/mailframe");

const mailframe = new MailFrame({ templatesPath: "./testBed/templates" });

console.log(
  mailframe.fillTemplateWithValues("reset-password", {
    name: "Petros",
    resetPasswordLink: "https://petroskyriakou.com",
  })
);
