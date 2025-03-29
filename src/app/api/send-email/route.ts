import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { sender, subject, message, userInfo } = await req.json();
    const userInfoMessage = userInfo
      ? `
      Informations utilisateur :
      - Nom de l'école : ${userInfo.schoolName || "Non fourni"}
      - Type de rôle : ${userInfo.roleType || "Non fourni"}
      - Pays : ${userInfo.country || "Non fourni"}
      - Ville : ${userInfo.city || "Non fourni"}
      - Adresse : ${userInfo.address || "Non fourni"}
      `
      : "Aucune information utilisateur fournie.";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });
    const mailOptions = {
      from: `"${sender.name}" <${sender?.address}>`,
      to: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
      replyTo: sender?.address,
      subject,
      text: `
      Message reçu :
      ${message}
      ${userInfoMessage}
      `,
    };
    await transporter.sendMail(mailOptions);
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
