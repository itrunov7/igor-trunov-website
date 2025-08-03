import Image from "next/image";
import { BookOpen, Users, Lightbulb, Target, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Igor Trunov
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A 38-year-old Russian entrepreneur living in Dubai, with over 10 years of experience 
              in technology innovation and business leadership. Igor combines strategic vision with 
              a people-first philosophy to drive breakthrough innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Background & Education</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Igor Trunov is the founder and CEO of Atlantix, an innovation factory that focuses 
                  on cutting-edge technologies and breakthrough solutions. Based in Dubai, he has 
                  established himself as a visionary leader in technology innovation and business development.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Harvard Business School - Advanced Leadership Program</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Stanford University - Innovation and Entrepreneurship Certificate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>MIT Sloan School of Management - Technology Strategy Program</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <div className="w-24 h-24 relative mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://optim.tildacdn.com/tild3539-3439-4562-a538-343665626236/-/format/webp/6_.png.webp"
                    alt="Igor Trunov"
                    fill
                    className="object-cover"
                  />
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                <blockquote className="text-lg text-gray-700 italic mb-4 text-center">
                  &quot;I believe that great companies are built by great people. My philosophy centers on 
                  empowering individuals, fostering creativity, and creating environments where innovation thrives.&quot;
                </blockquote>
                <cite className="text-sm font-medium text-gray-900 text-center block">Igor Trunov</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Philosophy & Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Igor&apos;s approach to leadership and innovation is built on fundamental principles 
              that have driven success across multiple ventures and sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leadership */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">People-First Leadership</h3>
              <p className="text-gray-600 mb-4">
                Empowering individuals and creating environments where innovation thrives through 
                transparency, trust, and distributed leadership.
              </p>
              <div className="border-l-4 border-blue-200 pl-4">
                <p className="text-sm text-gray-600 italic">
                  &quot;I delegate extensively because I believe in the power of distributed leadership.&quot;
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Strategy</h3>
              <p className="text-gray-600 mb-4">
                Reimagining possibilities and creating trends rather than following them. 
                Focusing on technologies that genuinely transform industries.
              </p>
              <div className="border-l-4 border-purple-200 pl-4">
                <p className="text-sm text-gray-600 italic">
                  &quot;Innovation isn&apos;t just about technology; it&apos;s about reimagining possibilities.&quot;
                </p>
              </div>
            </div>

            {/* Learning */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Failure as Learning</h3>
              <p className="text-gray-600 mb-4">
                Viewing mistakes as stepping stones rather than setbacks. Every error provides 
                valuable lessons that couldn&apos;t be learned any other way.
              </p>
              <div className="border-l-4 border-green-200 pl-4">
                <p className="text-sm text-gray-600 italic">
                  &quot;Mistakes are not setbacks\u2014they&apos;re stepping stones.&quot;
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Vision</h3>
              <p className="text-gray-600 mb-4">
                Focusing on generational impact rather than quarterly results. 
                True innovation requires patience and persistence.
              </p>
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-sm text-gray-600 italic">
                  "While others focus on quarterly results, we focus on generational impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Generation Book */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <div className="bg-white/10 p-6 rounded-xl">
                  <BookOpen className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-4">"Digital Generation"</h3>
                  <p className="text-blue-100 mb-4">
                    A comprehensive guide to understanding how digital transformation affects 
                    leadership, innovation, and society.
                  </p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• The intersection of technology and human potential</li>
                    <li>• Leadership in the digital age</li>
                    <li>• Building resilient organizations</li>
                    <li>• The future of work and innovation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Published Work</h2>
              <p className="text-lg text-gray-600 mb-6">
                Igor authored "Digital Generation," exploring the profound impact of digital 
                transformation on modern leadership and society. The book serves as a roadmap 
                for leaders navigating the complexities of our rapidly evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                As a regular contributor to Forbes and other major publications, Igor shares 
                insights on AI's impact on business strategy, leadership in uncertainty, 
                building innovation ecosystems, and the future of entrepreneurship.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Notable Quote:</h4>
                <blockquote className="text-gray-700 italic">
                  "AI will not replace humans, but humans with AI will replace humans without AI. 
                  The key is learning to work alongside artificial intelligence, not compete with it."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Management & Leadership Style
              </h2>
              <p className="text-xl text-gray-600">
                Igor's approach to team building and decision-making reflects his core philosophy 
                of empowerment and strategic thinking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Building</h3>
                <p className="text-gray-600">
                  "I focus on hiring people who are smarter than me in their areas of expertise. 
                  My job is to create conditions where the best answers can emerge."
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Decision Making</h3>
                <p className="text-gray-600">
                  "I believe in data-driven decisions, but I also trust intuition. 
                  The best business decisions synthesize analytical insights with human judgment."
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication</h3>
                <p className="text-gray-600">
                  "I maintain regular one-on-ones with key team members, not to micromanage, 
                  but to remove obstacles and provide support."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 