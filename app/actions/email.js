"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Yahan naam badal kar 'sendInquiry' kar dein
export async function sendInquiry(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const company = formData.get("company");
    const budget = formData.get("budget");
    const timeline = formData.get("timeline");
    const message = formData.get("message");

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["dev.aliahmedkhan@gmail.com"],
            subject: `Inquiry: ${subject} from ${name}`,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nCompany: ${company}\nBudget: ${budget}\nTimeline: ${timeline}\n\nMessage: ${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error("Resend Error:", error);
        return { success: false, error: error.message };
    }
}
