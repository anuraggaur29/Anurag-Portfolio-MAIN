import React, { useState, useEffect, useRef } from 'react';

export default function FounderTerminal({ theme = 'dark' }) {
  const [logs, setLogs] = useState([
    { id: 1, type: 'info', text: "Anurag's Personal AI Terminal [v2.0.0]" },
    { id: 2, type: 'info', text: "Personal AI Assistant to Anurag Shakalya (Full-Stack Developer & Founder of ScolAR)" },
    { id: 3, type: 'system', text: "Ask anything about Anurag or click quick options below:" },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current && logs.length > 3) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs, loading]);

  const handleQuery = async (queryText) => {
    const text = queryText || inputVal.trim();
    if (!text || loading) return;

    const userEntry = { id: Date.now(), type: 'user', text: text };
    setLogs((prev) => [...prev, userEntry]);
    if (!queryText) setInputVal('');
    setLoading(true);

    const lower = text.toLowerCase().trim();

    // Clear logs
    if (lower === 'clear' || lower === 'cls') {
      setLogs([
        { id: Date.now(), type: 'info', text: "Anurag's Personal AI Terminal [v2.0.0]" },
        { id: Date.now() + 1, type: 'system', text: "Ask anything about Anurag or click quick options below:" },
      ]);
      setLoading(false);
      return;
    }

    // Greetings
    if (lower === 'hi' || lower === 'hello' || lower === 'hey' || lower === 'hey!') {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Hey! I am Anurag Shakalya's Personal AI Assistant. I can tell you all about Anurag's background, full-stack developer skills, production projects (ScolAR, StockPulse, LectureCapture AI), education, and contact details! Ask me anything about Anurag.`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Identity questions
    if (
      lower.includes('who are you') ||
      lower.includes('who r u') ||
      lower.includes('what is your name') ||
      lower.includes('who made you') ||
      lower.includes('who created you') ||
      lower.includes('what do you do')
    ) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `I am Anurag Shakalya's Personal AI Assistant! My purpose is to assist visitors by sharing details about Anurag's technical stack, full-stack software projects, work experience, education at Chandigarh University, and contact details.`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Specific Email intent
    if (lower.includes('email') || lower.includes('mail')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Email: anuragshakalya@gmail.com\nFeel free to reach out via email for SDE / Full-Stack software engineering roles!`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Specific Phone intent
    if (lower.includes('phone') || lower.includes('number') || lower.includes('call') || lower.includes('whatsapp') || lower.includes('mobile')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Phone / WhatsApp: +91 7988019566`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Specific LinkedIn / GitHub / Socials intent
    if (lower.includes('linkedin')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's LinkedIn Profile:\nhttps://linkedin.com/in/anuraggaur29`,
        },
      ]);
      setLoading(false);
      return;
    }

    if (lower.includes('github')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's GitHub Profile:\nhttps://github.com/anuraggaur29`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Specific Location intent
    if (lower.includes('location') || lower.includes('where')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Location: Chandigarh, India`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Specific CGPA / Grades intent
    if (lower.includes('cgpa') || lower.includes('gpa') || lower.includes('marks') || lower.includes('grade')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Academic CGPA: 8.16\nDegree: B.E. Computer Science Engineering (AI & ML Specialization) @ Chandigarh University`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Specific Experience / Internship intent
    if (lower.includes('experience') || lower.includes('intern') || lower.includes('work') || lower.includes('job')) {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Work Experience:\nFull Stack Web Development Intern at Webstack Academy (MERN Stack, Remote | Mar 2026 – Apr 2026)\n• Built & shipped REST APIs consumed by React frontend.\n• Fixed data-consistency bugs caused by mismatched frontend/backend schema assumptions.`,
        },
      ]);
      setLoading(false);
      return;
    }

    // Direct resume buttons
    if (lower === 'summary') {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya — Full-Stack Developer & Founder of ScolAR\nFull-stack software developer who has shipped 3 production web apps live on real URLs (React / FastAPI / PostgreSQL / Supabase). Comfortable owning features end-to-end: schema design, REST APIs, RLS/auth, and cloud deployment.`,
        },
      ]);
      setLoading(false);
      return;
    }

    if (lower === 'skills') {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Technical Stack:\n• Languages: C, C++, Python, JavaScript, TypeScript, SQL\n• Frontend: React, Next.js, Tailwind CSS, Material UI\n• Backend: FastAPI, Node.js, REST APIs, JWT Auth\n• Databases: PostgreSQL, Supabase, MongoDB (schema design, RLS)\n• Tools & DevOps: Git, GitHub, Postman, Docker, Linux, Selenium, Vercel`,
        },
      ]);
      setLoading(false);
      return;
    }

    if (lower === 'projects') {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Featured Production Projects:\n1. ScolAR — AI-Powered Exam Prep & Student OS Platform (React 19, FastAPI, PostgreSQL, Supabase). Multi-tenant RLS schemas & Selenium CUIMS data sync.\n2. StockPulse — Retail Inventory Analytics Platform (React, FastAPI, PostgreSQL, MUI). CTEs & window functions over 3,700+ products with JWT RBAC.\n3. LectureCapture AI — AI Study Sheet Generator (React, FastAPI, Mistral AI, MUI). Converts video/audio/PDF lectures into structured study sheets.`,
        },
      ]);
      setLoading(false);
      return;
    }

    if (lower === 'education') {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Academic Credentials:\n• B.E. Computer Science Engineering (AI & ML Specialization)\n  Chandigarh University (Mohali, Punjab) | CGPA: 8.16 (Aug 2023 - Jan 2027)\n• Class XII — 84%\n  Hari Bhoomi Sr. Sec. School (Jind, Haryana) (2023)\n• Certifications: Microsoft Azure AI Fundamentals (AI-900)\n• Leadership: Class Representative for 70+ students (1.5+ yrs), Graph-E-Thon 3.0 National Top 50 Finalist`,
        },
      ]);
      setLoading(false);
      return;
    }

    if (lower === 'contact') {
      setLogs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'assistant',
          text: `Anurag Shakalya's Contact & Links:\n• Location: Chandigarh, India\n• Phone: +91 7988019566\n• Email: anuragshakalya@gmail.com\n• Portfolio: anuraggaur29.netlify.app\n• LinkedIn: linkedin.com/in/anuraggaur29\n• GitHub: github.com/anuraggaur29`,
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const systemPrompt = `You are Anurag Shakalya's Personal AI Assistant.
YOUR SOLE PURPOSE IS TO BE ANURAG SHAKALYA'S PERSONAL PORTFOLIO ASSISTANT. YOU ARE NOT SCOLAR STUDY HELP BOT OR EXAM SENIOR.

Official Resume Knowledge Base of Anurag Shakalya:
- Full Name: Anurag Shakalya
- Title: Full-Stack Software Developer | Founder & CEO of ScolAR
- Location: Chandigarh, India | Phone: +91 7988019566 | Email: anuragshakalya@gmail.com | LinkedIn: linkedin.com/in/anuraggaur29 | GitHub: github.com/anuraggaur29 | Portfolio: anuraggaur29.netlify.app
- Professional Summary: Full-stack developer who shipped 3 production web apps live on real URLs (React, FastAPI, PostgreSQL, Supabase).
- Education: Chandigarh University (B.E. CSE AI & ML Specialization, CGPA 8.16, 2023-2027), Hari Bhoomi Sr. Sec. School (Class XII 84%, 2023).
- Work Experience: Full Stack Web Development Intern at Webstack Academy (MERN Stack, Remote, Mar 2026-Apr 2026).
- Featured Projects: ScolAR (AI Exam Prep Platform), StockPulse (Retail Inventory Analytics), LectureCapture AI (Study Sheet Generator).
- Technical Skills: C, C++, Python, JS, TS, SQL, React, Next.js, Tailwind, MUI, FastAPI, Node.js, PostgreSQL, Supabase, MongoDB, Git, Docker, Linux, Selenium, Vercel.
- Leadership & Certifications: Graph-E-Thon 3.0 National Top 50 Finalist, Class Representative for 70+ students (1.5+ yrs), Azure AI Fundamentals (AI-900).

IDENTITY & SCOPE RULES:
1. ALWAYS identify as "Anurag Shakalya's Personal AI Assistant".
2. Describe EVERYTHING around Anurag Shakalya only. Never claim to be a study bot or CU exam senior.
3. If asked questions unrelated to Anurag, state: "I am Anurag Shakalya's Personal AI Assistant. Ask me about Anurag's skills, projects, background, or contact details!"
4. DO NOT output markdown asterisks (** or *) or header hashes (#). Keep output in crisp, clean plain text.
5. DEFAULT LANGUAGE: Always speak in clean, professional English by default. Adapt to another language only if the user explicitly writes to you in another language.`;

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer scolar_guest_token'
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: text }
          ],
          mode: 'CHILL'
        })
      });

      if (!res.ok) {
        throw new Error(`API status ${res.status}`);
      }

      const data = await res.json();
      let reply = data.choices?.[0]?.message?.content || 'No response received.';
      reply = reply.replace(/\*\*/g, '').replace(/\*/g, '').replace(/###\s?/g, '').replace(/##\s?/g, '');
      setLogs((prev) => [...prev, { id: Date.now() + 1, type: 'assistant', text: reply }]);
    } catch (err) {
      // Production live fallback answering exact query cleanly if backend endpoint unavailable
      let smartFallback = `Anurag Shakalya — Full-Stack Developer & Founder of ScolAR\nLocation: Chandigarh, India | Email: anuragshakalya@gmail.com | Phone: +91 7988019566`;
      if (lower.includes('email') || lower.includes('mail')) {
        smartFallback = `Anurag Shakalya's Email: anuragshakalya@gmail.com\nFeel free to reach out via email for SDE / Full-Stack software engineering roles!`;
      } else if (lower.includes('phone') || lower.includes('number') || lower.includes('call') || lower.includes('whatsapp') || lower.includes('mobile')) {
        smartFallback = `Anurag Shakalya's Phone / WhatsApp: +91 7988019566`;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) {
        smartFallback = `Anurag Shakalya's Technical Stack:\n• Languages: C, C++, Python, JavaScript, TypeScript, SQL\n• Frontend: React, Next.js, Tailwind CSS, Material UI\n• Backend: FastAPI, Node.js, REST APIs, JWT Auth\n• Databases: PostgreSQL, Supabase, MongoDB (schema design, RLS)\n• DevOps & Tools: Git, GitHub, Docker, Linux, Selenium, Vercel`;
      } else if (lower.includes('project') || lower.includes('app') || lower.includes('work')) {
        smartFallback = `Anurag Shakalya's Featured Production Projects:\n1. ScolAR — AI Exam Prep & Student OS Platform (React 19, FastAPI, PostgreSQL, Supabase).\n2. StockPulse — Retail Inventory Analytics Platform (React, FastAPI, PostgreSQL, MUI).\n3. LectureCapture AI — AI Study Sheet Generator (React, FastAPI, Mistral AI, MUI).`;
      } else if (lower.includes('education') || lower.includes('degree') || lower.includes('college') || lower.includes('university') || lower.includes('cgpa')) {
        smartFallback = `Anurag Shakalya's Academic Credentials:\n• B.E. Computer Science Engineering (AI & ML Specialization) | CGPA: 8.16\n  Chandigarh University (Mohali, Punjab) (Aug 2023 - Jan 2027)\n• Class XII — 84% | Hari Bhoomi Sr. Sec. School (Jind, Haryana) (2023)`;
      } else if (lower.includes('contact') || lower.includes('reach') || lower.includes('link')) {
        smartFallback = `Anurag Shakalya's Contact & Social Links:\n• Email: anuragshakalya@gmail.com\n• Phone: +91 7988019566\n• Portfolio: anuraggaur29.netlify.app\n• LinkedIn: linkedin.com/in/anuraggaur29\n• GitHub: github.com/anuraggaur29`;
      }
      setLogs((prev) => [
        ...prev,
        { id: Date.now() + 1, type: 'assistant', text: smartFallback },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`portfolio-terminal-widget ${theme === 'dark' ? 'dk' : 'lt'}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">anurag@ai-assistant ~ % (Anurag's Personal AI)</div>
        <div className="terminal-actions">
          <button onClick={() => handleQuery('clear')} title="Clear logs">
            🗑️
          </button>
        </div>
      </div>

      <div className="terminal-chips">
        <button onClick={() => handleQuery('summary')}>Summary</button>
        <button onClick={() => handleQuery('skills')}>Skills</button>
        <button onClick={() => handleQuery('projects')}>Projects</button>
        <button onClick={() => handleQuery('education')}>Education</button>
        <button onClick={() => handleQuery('contact')}>Contact</button>
      </div>

      <div className="terminal-body" ref={terminalBodyRef}>
        {logs.map((log) => (
          <div key={log.id} className={`log-line ${log.type}`}>
            {log.type === 'user' && <span className="prompt-prefix">anurag@ai-assistant ~ % </span>}
            <span className="log-text">{log.text}</span>
          </div>
        ))}
        {loading && (
          <div className="log-line loading">
            <span className="prompt-prefix">anurag@ai-assistant ~ % </span>
            <span className="cursor-blink">▌ Processing request...</span>
          </div>
        )}
      </div>

      <form
        className="terminal-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          handleQuery();
        }}
      >
        <span className="input-prefix">anurag@ai-assistant ~ %</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask about Anurag's skills, projects, contact..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !inputVal.trim()} title="Send">
          ↵
        </button>
      </form>
    </div>
  );
}
