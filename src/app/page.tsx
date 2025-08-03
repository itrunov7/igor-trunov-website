import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, MessageSquare, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Entrepreneur & Innovation Leader</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Igor Trunov
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Founder & CEO of <span className="text-blue-600 font-semibold">Atlantix</span>, 
                  author of "Digital Generation," and visionary driving innovation in AI, 
                  biotechnology, and sustainable technologies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/signin"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat with Igor AI</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden">
        <Image
                  src="https://optim.tildacdn.com/tild3539-3439-4562-a538-343665626236/-/format/webp/6_.png.webp"
                  alt="Igor Trunov - Entrepreneur & Innovation Leader"
                  fill
                  className="object-cover rounded-2xl"
          priority
        />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for AI Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Entrepreneurship</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Technology Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <div className="text-gray-600">Published Book</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging over a decade of experience in technology innovation and leadership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership & Strategy</h3>
              <p className="text-gray-600 mb-4">
                People-first leadership philosophy with focus on empowerment, transparency, 
                and long-term vision. Building teams that innovate and scale.
              </p>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation & AI</h3>
              <p className="text-gray-600 mb-4">
                Driving breakthrough innovations in AI, biotechnology, clean energy, 
                and quantum computing through Atlantix innovation factory.
              </p>
              <Link href="/projects" className="text-purple-600 hover:text-purple-700 font-medium">
                Explore projects →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Thought Leadership</h3>
              <p className="text-gray-600 mb-4">
                Author of "Digital Generation" and regular contributor to Forbes, 
                sharing insights on digital transformation and future technology.
              </p>
              <Link href="/articles" className="text-green-600 hover:text-green-700 font-medium">
                Read articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Explore Innovation Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Chat with Igor AI to learn about entrepreneurship, innovation strategies, 
            and the future of technology. Get personalized insights based on Igor's experience.
          </p>
          <Link
            href="/auth/signin"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start AI Conversation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
