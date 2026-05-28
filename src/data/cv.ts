/**
 * Praveen's CV Data and Dynamic Resume Downloader
 */

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export const cvData = {
  name: "Praveen",
  title: "Senior Product Designer & Full-Stack Developer",
  location: "Global / Remote",
  email: "praveens1306@gmail.com",
  linkedin: "https://linkedin.com/in/praveen200",
  summary: "Senior Product Designer and Full-Stack Engineer specializing in high-end financial technologies, trading platforms, complex dashboard design, and enterprise-grade design systems. Over a decade of executing the complete product pipeline—from low-fidelity structural maps and interactive Figma wireframes to high-performance React/TypeScript application builds.",
  skills: {
    design: ["User Interface (UI)", "User Experience (UX)", "Design Systems Architect", "Interaction Design", "Figma Expert", "Visual Storytelling", "Wireframing & Prototyping"],
    development: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Vite", "RESTful & GraphQL APIs", "Local State Engines", "SVG and HTML Canvas Animating"]
  },
  experience: [
    {
      role: "Lead Fintech Product Designer & Developer",
      company: "Apex Capital Tech",
      period: "2022 - Present",
      description: "Spearheaded design and frontend implementation of enterprise liquidity-provider dashboards and complex visual crypto-trading graphs, serving over 1.5 million active users.",
      bullets: [
        "Architected and engineered a comprehensive, responsive Fintech Design System, reducing product time-to-market by 42%.",
        "Created custom high-performance data visualizers and canvas components that handle thousands of ticks per second.",
        "Facilitated key collaboration between engineering and design teams using interactive design tokens in Tailwind and Figma."
      ]
    },
    {
      role: "Senior UX/UI Designer (Financial Systems)",
      company: "Novus Digital Payments",
      period: "2019 - 2022",
      description: "Led structural design and interactive flows for consumer-facing wallet software and cross-border digital transactions.",
      bullets: [
        "Re-designed the core digital wallet flow, resulting in a 28% increase in transaction completions and reduced user friction.",
        "Launched a mobile-first crypto custody interface with advanced real-time charts and custom notifications.",
        "Mentored junior designers and established structured UI guidelines across multiple departments."
      ]
    },
    {
      role: "Product Interface Designer",
      company: "Flux Trading Group",
      period: "2016 - 2019",
      description: "Designed multi-screen desktop layouts and widgets for high-frequency trading applications and market analysis systems.",
      bullets: [
        "Designed the 'Cunex Widget' and interactive conversion modules for desktop and mobile environments.",
        "Successfully optimized dense tabular data screens with complex filters and responsive layout mechanics."
      ]
    }
  ] as Experience[],
  education: [
    {
      degree: "Bachelor of Science in Interactive Design & Computer Science",
      school: "Institute of Technology",
      year: "2012 - 2016"
    }
  ] as Education[]
};

/**
 * Generates a beautifully formatted HTML resume file and downloads it.
 * The downloaded file is perfectly-styled for offline viewing or printing to PDF.
 */
export function downloadResumeFile() {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praveen - Resume CV</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1a1a1a;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
            background-color: #fafafa;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        header {
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 25px;
            margin-bottom: 25px;
        }
        h1 {
            font-size: 36px;
            font-weight: 300;
            margin: 0 0 10px 0;
            letter-spacing: -1px;
            color: #0a0a0a;
        }
        .title {
            font-size: 18px;
            color: #666;
            font-weight: 400;
            margin: 0 0 15px 0;
        }
        .contact {
            font-size: 14px;
            color: #888;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }
        .contact a {
            color: #333;
            text-decoration: none;
            border-bottom: 1px solid #ccc;
        }
        .contact a:hover {
            color: #000;
            border-bottom-color: #000;
        }
        section {
            margin-bottom: 30px;
        }
        h2 {
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #999;
            margin-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 5px;
        }
        .summary {
            font-size: 15px;
            color: #444;
            margin-top: 0;
        }
        .exp-item {
            margin-bottom: 20px;
        }
        .exp-header {
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            font-weight: 600;
            color: #111;
            margin-bottom: 5px;
        }
        .exp-sub {
            font-size: 14px;
            color: #777;
            margin-bottom: 8px;
        }
        .bullets {
            margin: 0 0 0 20px;
            padding: 0;
            font-size: 14px;
            color: #444;
        }
        .bullets li {
            margin-bottom: 5px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .skill-cat h3 {
            font-size: 14px;
            color: #555;
            margin-top: 0;
            margin-bottom: 8px;
        }
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            background: #f0f0f0;
            color: #333;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 12px;
        }
        @media print {
            body {
                background: none;
                padding: 0;
            }
            .container {
                box-shadow: none;
                padding: 0;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${cvData.name}</h1>
            <div class="title">${cvData.title}</div>
            <div class="contact">
                <span>📍 ${cvData.location}</span>
                <span>✉️ <a href="mailto:${cvData.email}">${cvData.email}</a></span>
                <span>🔗 <a href="${cvData.linkedin}" target="_blank">LinkedIn Client ID: @praveen200</a></span>
            </div>
        </header>
        
        <section>
            <h2>Summary</h2>
            <p class="summary">${cvData.summary}</p>
        </section>

        <section>
            <h2>Experience</h2>
            ${cvData.experience.map(exp => `
                <div class="exp-item">
                    <div class="exp-header">
                        <span>${exp.role}</span>
                        <span>${exp.period}</span>
                    </div>
                    <div class="exp-sub">${exp.company}</div>
                    <p style="font-size: 14px; color: #555; margin: 0 0 8px 0;">${exp.description}</p>
                    <ul class="bullets">
                        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </section>

        <section>
            <h2>Skills & Technologies</h2>
            <div class="skills-grid">
                <div class="skill-cat">
                    <h3>Design & Prototyping</h3>
                    <div class="skill-tags">
                        ${cvData.skills.design.map(s => `<span class="tag">${s}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-cat">
                    <h3>Development & Architecture</h3>
                    <div class="skill-tags">
                        ${cvData.skills.development.map(s => `<span class="tag">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2>Education</h2>
            <div class="exp-item">
                <div class="exp-header">
                    <span>${cvData.education[0].degree}</span>
                    <span>${cvData.education[0].year}</span>
                </div>
                <div class="exp-sub">${cvData.education[0].school}</div>
            </div>
        </section>
        
        <footer style="margin-top: 50px; pt-20; text-align: center; font-size: 12px; color: #aaa; border-top: 1px solid #eee; padding-top: 15px;">
            Designed by Praveen — Powered by Sophisticated Dark Portfolio Suite.
        </footer>
    </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Praveen_CV.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
