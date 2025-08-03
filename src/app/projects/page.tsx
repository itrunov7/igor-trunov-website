import Link from "next/link";
import { ExternalLink, Cpu, Dna, Leaf, Atom, Zap, TrendingUp, Award, Users, Globe } from "lucide-react";

export default function Projects() {
  const focusAreas = [
    {
      icon: Cpu,
      title: "Artificial Intelligence & Machine Learning",
      description: "Developing next-generation AI solutions that augment human capabilities and drive intelligent automation across industries.",
      projects: ["AI-powered analytics platform", "Natural language processing tools", "Computer vision applications"],
      color: "blue"
    },
    {
      icon: Dna,
      title: "Biotechnology",
      description: "Advancing medical research and healthcare solutions through innovative biotechnology applications and research initiatives.",
      projects: ["Medical diagnostic tools", "Drug discovery platforms", "Genetic analysis systems"],
      color: "purple"
    },
    {
      icon: Leaf,
      title: "Clean Energy",
      description: "Creating sustainable energy solutions for the future with focus on renewable technologies and energy efficiency.",
      projects: ["Solar optimization systems", "Energy storage solutions", "Smart grid technologies"],
      color: "green"
    },
    {
      icon: Atom,
      title: "Advanced Materials",
      description: "Pioneering new materials for aerospace and industrial applications with enhanced properties and capabilities.",
      projects: ["Nano-material development", "Composite structures", "Smart material applications"],
      color: "orange"
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Exploring quantum technologies for computational breakthroughs and next-generation computing solutions.",
      projects: ["Quantum algorithms", "Quantum cryptography", "Quantum sensing applications"],
      color: "indigo"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Product Hunt Recognition",
      description: "Featured multiple times on Product Hunt for innovative products and solutions"
    },
    {
      icon: TrendingUp,
      title: "Multiple Successful Exits",
      description: "Track record of successful company exits in the technology sector"
    },
    {
      icon: Users,
      title: "Thought Leadership",
      description: "Recognition as a thought leader in AI and innovation across the industry"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Atlantix Innovation Factory
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Systematic innovation across multiple high-impact sectors, driving breakthrough 
              solutions that transform industries and improve lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.atlantix.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Globe className="w-5 h-5" />
                <span>Visit Atlantix.cc</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://eqnthtim.manus.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Globe className="w-5 h-5" />
                <span>Innovation Hub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Atlantix represents Igor&apos;s vision of systematic innovation across multiple high-impact 
                sectors. We don&apos;t just follow trends—we create them, focusing on technologies that 
                can genuinely transform industries and improve lives.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Philosophy</h3>
                <blockquote className="text-gray-700 italic">
                  &quot;We don&apos;t just invest in companies; we invest in ideas that can change the world. 
                  Our portfolio represents our belief in the power of technology to solve humanity&apos;s 
                  greatest challenges.&quot;
                </blockquote>
                <cite className="text-sm font-medium text-gray-600 mt-2 block">— Igor Trunov</cite>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Technology Sectors</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Portfolio Companies</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-sm text-gray-600">Innovation Potential</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
                <div className="text-sm text-gray-600">Active Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Innovation Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atlantix operates across five key technology sectors, each representing significant 
              opportunities for breakthrough innovations and transformative solutions.
            </p>
          </div>
          
          <div className="space-y-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-${area.color}-100 rounded-lg flex items-center justify-center`}>
                        <area.icon className={`w-6 h-6 text-${area.color}-600`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{area.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Project Areas:</h4>
                      <ul className="space-y-1">
                        {area.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="flex items-center space-x-2 text-gray-600">
                            <span className={`w-2 h-2 bg-${area.color}-600 rounded-full`}></span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center">
                    <area.icon className={`w-16 h-16 text-${area.color}-600 mx-auto mb-4`} />
                    <div className="text-sm text-gray-600">Sector Focus</div>
                    <div className={`text-2xl font-bold text-${area.color}-600 mt-1`}>Active</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atlantix has gained recognition across the technology sector for its innovative 
              approach and successful track record.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Investment Opportunities
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Interested in joining our mission to drive breakthrough innovations? 
            Explore investment opportunities and partnership possibilities with Atlantix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.atlantix.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/auth/signin"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Discuss with Igor AI</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 