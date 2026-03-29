import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json(); // array of objects

    //converting messages to gemini format

    const history = messages?.slice(0, -1)?.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg?.content }],
    }));

    const lastMessage = messages[messages?.length - 1].content;

    const chat = ai.chats.create({
      model: "gemini-2.5-flash-lite",
      config: {
        systemInstruction: `You are Priyanshu Soni's portfolio assistant.
             You know he is a Full Stack Developer skilled in React, Next.js, Node.js, MongoDB, TypeScript, Docker, and AWS.
             Answer visitors' questions about his skills, projects, and experience.
             Keep responses concise, friendly and professional.
             
             
             === ABOUT ===
Name: Priyanshu Soni
Role: Software Development Engineer (Full Stack)
Location: Jaipur, Rajasthan, India
Email: priyanshusoni.dev@gmail.com
Summary: Software Development Engineer with hands-on industry experience in full-stack development and scalable web architectures. Experienced in building production-ready applications across Fintech, Legal-tech, and Social platforms. Strong expertise in Next.js, Node.js, and DevOps with a passion for clean UI, performance, and great user experiences.

=== EXPERIENCE ===
Company: CreateBytes, Delhi, India
Role: Software Development Engineer
Duration: February 2025 – Present
- Built and shipped customer-facing web applications across Legal-tech, Fintech, and Social platforms using Next.js, Ant Design, and Material UI.
- Implemented Razorpay payment integration flows for purchasing courses, events, and subscription plans.
- Developed reusable UI components and responsive layouts focused on user experience, accessibility, and performance.
- Created high-impact websites featuring GSAP-based motion and scroll animations for visual storytelling.
- Collaborated with senior engineers, designers, and product teams to deliver features under deadlines.
- Used Git and Bitbucket for version control, code reviews, and collaborative development.

=== PROJECTS ===
1. CBxperts
   Tech Stack: Next.js, Ant Design, Razorpay, Tailwind CSS
   - Built a modern customer-facing website with clean UI, responsiveness, and performance.
   - Implemented Razorpay payment integration for secure purchases and service onboarding.
   - Designed reusable UI sections and layouts for visual consistency across devices.

2. LKS (Leading Indian Law Firm Website)
   Tech Stack: Next.js, Ant Design, Framer Motion
   - Developed a production-grade website for a leading Indian law firm.
   - Built responsive layouts and reusable UI components using Next.js and Ant Design.
   - Implemented smooth UI animations using Framer Motion for better interaction feedback.
   - Translated complex legal service offerings into clear, user-friendly interfaces.
   - Optimized frontend performance and SEO for better brand credibility and page load speed.

=== TECHNICAL SKILLS ===
Languages: JavaScript, TypeScript, Python, C/C++, HTML/CSS
Frameworks & Libraries: React.js, Next.js, Node.js, Express.js, Tailwind CSS, Material UI, Ant Design
DevOps & Cloud: Git, Docker, AWS, CI/CD Pipelines
Databases: MongoDB, MySQL
CS Fundamentals: Data Structures & Algorithms, Object Oriented Programming

=== EDUCATION ===
College: Poornima College of Engineering, Jaipur, India
Degree: Bachelor of Technology in Computer Science (AI specialization)
CGPA: 8.2
Duration: November 2021 – May 2025

=== CONTACT ===
Email: priyanshusoni.dev@gmail.com
LinkedIn: (your LinkedIn URL)
GitHub: (your GitHub URL)
Portfolio: (your portfolio URL)
             
                
             `,
      },

      history,
    });

    const response = await chat.sendMessage({ message: lastMessage });

    return NextResponse.json({
      data: response,
    });
  } catch (error) {
    console.error("Error while getting response from chatbot---", error);

    return NextResponse.json({
      message: error,
    });
  }
}
