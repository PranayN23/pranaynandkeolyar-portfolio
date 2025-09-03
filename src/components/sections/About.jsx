import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // Languages
  const languages = ["Python", "Java", "C", "JavaScript", "SQL", "R", "C++"];

  const libraries = [
    "FastMCP",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Scikit Learn",
    "Quantstats",
    "Beautiful Soup",
    "OpenAI API",
    "LangChain",
    "Whisper",
  ];

  const frameworksAndTechnologies = [
    "Model Context Protocol",
    "Retrieval Augmented Generation",
    "React",
    "Flask",
    "Node.js",
    "Express",
    "MongoDB",
    "Azure CosmosDB",
    "Azure AI Search",
    "Neo4j",
    "Tailwind CSS",
    "Vite",
    "Git",
    "Jira",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Aspiring Software Engineer and CS major at Purdue University
              specializing in full stack development, low level programming, and
              artificial intelligence dedicated to creating innovative software
              solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Languages </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Libraries </h3>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Frameworks and Technologies{" "}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frameworksAndTechnologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S in Computer Science</strong> - Purdue University
                </li>

                <ul className="list-disc list-inside ml-6">
                  <li>Finance Minor</li>
                  <li>Expected Graduation: May 2027</li>
                </ul>
                <li>
                  <strong>Relevant Coursework:</strong>
                </li>
                <ul className="list-disc list-inside ml-6">
                  <li>Object Oriented Programming</li>
                  <li>C Programming</li>
                  <li>Intermediate Data Programming</li>
                  <li>Computer Architecture</li>
                  <li>Data Structures</li>
                  <li>Web Application Programming</li>
                  <li>Competitive Programming I</li>
                  <li>Systems Programming</li>
                  <li>Introduction to the Analysis of Algorithms</li>
                  <li>Information Systems</li>
                  <li>Software Engineering</li>
                  <li>Computer Security</li>
                  <li>Financial Data Analysis and Modeling</li>
                </ul>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer Intern, Defendermare (Jun 2025 – Aug 2025)
                  </h4>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      Developing an agentic multi-document AI RAG pipeline using Python and Claude APIs to identify gaps in
security threat detection as well as which security vulnerabilities should be prioritized for remediation
                    </li>
                    <li>
                     Implementing support for multimodal inputs (text and images) with an integrated real-time web search.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineer Intern, AT&T Labs (Jun 2025 – Aug 2025)
                  </h4>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      Developed intelligent AI agents that analyze 5G network logs from Snowflake and MongoDB test case data to
identify test failures and root cause network issues in seconds instead of minutes/hours.
                    </li>
                    <li>
                    Created a test case discovery agent that allows engineers to find test cases using natural language. Extracting
data from MongoDB and code repositories and embedding them into a secure Cosmos vector database.
                    </li>
                    <li>
                      Utilized Model Context Protocol (FastMCP), Retrieval Augmented Generation, and Agentic AI techniques
(LangChain/LangGraph) in Python through OpenAI API wrappers provided by AT&T.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Lead Software Developer, ML@Purdue: NFL Resource Allocation
                    (Feb 2024 – Present)
                  </h4>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      Developed predictive models using TensorFlow in Python,
                      including RNNs, to forecast NFL team success based on
                      position investment and player performance data. Achieved
                      R² values of 84% for team and player success predictions.
                    </li>
                    <li>
                      Implemented a web-based Offseason Simulator using Flask
                      (backend), React (frontend), and MongoDB (database) for
                      simulating player signings, drafts, and trades against MCP agents.
                    </li>
                    <li>
                      Scraped, cleaned, and stored 15 years of NFL investment
                      and performance data using Beautiful Soup, Pandas, and
                      MongoDB to ensure data integrity for analysis and
                      modeling.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Data Engineer Intern, Knudsen Institute (Aug 2023 – May
                    2024)
                  </h4>
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      Tuned Hugging Face NER models to identify ICE component
                      manufacturers capable of producing electric vehicle parts
                      with 75%+ accuracy.
                    </li>
                    <li>
                      Used Beautiful Soup and Selenium to scrape manufacturers’
                      capability data.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
