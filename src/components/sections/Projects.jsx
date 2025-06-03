import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Boilermaker Interview Prep",
      dates: "February 2025 - June 2025",
      description: [
        "Allows users to upload their resume and either answer basic questions to get graded or do a resume-specific mock interview with 5 timed questions and grading.",
        "Uses Whisper to transcribe video responses and OpenAI API to grade the answers based on transcriptions.",
        "Generates resume-specific interview questions dynamically based on the user's resume.",
        "Users can review past grades to track their progress.",
        "Built using Python, Flask, React, and MongoDB.",
      ],
      tech: ["Python", "Flask", "React", "MongoDB", "OpenAI API", "Whisper"],
      link: "#",
    },
    {
      title: "Bollywood Heardle",
      dates: "November 2024 – May 2025",
      description: [
        "Developed an interactive music guessing game using Python, Flask, React, MongoDB, and the Spotify API.",
        "Utilized Spotify APIs for user authentication and fetching song audio and metadata for the creation of a dynamic song library.",
        "Built core gameplay mechanics, including a progressive hint system with increasingly longer song clips.",
      ],
      tech: ["Python", "Flask", "React", "MongoDB", "Spotify API"],
      link: "#",
    },
    {
      title: "Simple C Compiler",
      dates: "November 2024 – December 2024",
      description: [
        "Developed a compiler for SimpleC, a C subset, generating x86-64 assembly code.",
        "Used Lex and Yacc for grammar parsing and assembly generation. Managed builds via Make and Git.",
        "Optimized code generation time to be 8% faster than GCC.",
        "Simulated and optimized stack machines with registers, enabling efficient usage of multiple argument functions.",
      ],
      tech: ["Lex", "Yacc", "Make", "Git", "C", "x86 Assembly"],
      link: "#",
    },
    {
      title: "Shell Interpreter",
      dates: "March 2024 – April 2024",
      description: [
        "Built a Unix-like shell combining behaviors from bash and csh using C++, Lex (Flex), and Yacc (Bison).",
        "Implemented a scanner and parser supporting complex commands with pipes, redirection, subshells, built-ins, signal handling, wildcard expansions, and shell history.",
        "Refactored C-style code to modern C++ for improved memory management and functionality.",
      ],
      tech: ["C++", "Lex", "Yacc", "Flex", "Bison", "Unix System Calls"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, dates, description, tech, link }, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
              >
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                {dates && <p className="text-sm text-gray-500 mb-3">{dates}</p>}
                <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                  {description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((techItem, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <a
                  href={link}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
                >
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
