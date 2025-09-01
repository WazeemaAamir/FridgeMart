import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // Here you can integrate any agent:
    // 1️⃣ Send email via SendGrid, Nodemailer
    // 2️⃣ Send WhatsApp message via API
    // 3️⃣ Save to database

    console.log("Message received:", { name, email, message });

    // Simulate async operation
    await new Promise((r) => setTimeout(r, 500));

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
