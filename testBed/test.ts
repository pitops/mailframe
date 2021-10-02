import { mailer } from "./mailer";

class TestMailer {
  static resetPassword() {
    return mailer.send("sendgrid", "reset-password", {
      subject: "Reset password",
      from: "no-reply@messageraft.com",
      to: "9pitops@gmail.com",
      variables: {
        name: "Petros",
        resetPasswordLink: "https://petroskyriakou.com",
      },
    });
  }
}

TestMailer.resetPassword()
  .then((res) => console.log(JSON.stringify(res)))
  .catch((error) => console.error(JSON.stringify(error)));
