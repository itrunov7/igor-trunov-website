'use client';

import { useState } from "react";
import { Search, Calendar, ExternalLink, BookOpen, TrendingUp, Users, Lightbulb } from "lucide-react";

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Articles", count: 12 },
    { id: "ai", name: "AI & Technology", count: 5 },
    { id: "leadership", name: "Leadership", count: 4 },
    { id: "innovation", name: "Innovation", count: 3 },
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business Strategy",
      excerpt: "Exploring how artificial intelligence is reshaping business strategy and the key considerations for leaders implementing AI solutions across their organizations.",
      category: "ai",
      date: "2024-01-15",
      readTime: "8 min read",
      source: "Forbes",
      type: "external",
      url: "https://forbes.com/ai-business-strategy"
    },
    {
      id: 2,
      title: "Building Innovation Ecosystems in the Digital Age",
      excerpt: "A comprehensive guide to creating environments where innovation thrives, focusing on the intersection of technology, culture, and strategic vision.",
      category: "innovation",
      date: "2024-01-10",
      readTime: "12 min read",
      source: "LinkedIn",
      type: "external",
      url: "https://linkedin.com/in/igor-trunov"
    },
    {
      id: 3,
      title: "Leadership in Uncertainty: Lessons from Digital Transformation",
      excerpt: "Key insights on leading organizations through uncertainty, drawing from experiences in digital transformation and rapid technological change.",
      category: "leadership",
      date: "2024-01-05",
      readTime: "10 min read",
      source: "Personal Blog",
      type: "internal",
      content: `
        In today's rapidly evolving business landscape, leaders must navigate unprecedented levels of uncertainty. Digital transformation has accelerated these challenges, requiring new approaches to leadership that embrace adaptability and resilience.

        ## The New Leadership Paradigm

        Traditional leadership models, built for stable environments, are no longer sufficient. Today's leaders must:

        - Embrace ambiguity as a source of opportunity
        - Foster rapid learning and adaptation
        - Build resilient, self-organizing teams
        - Maintain long-term vision while adapting short-term tactics

        ## Key Strategies for Uncertain Times

        ### 1. Distributed Decision Making
        Empower teams to make decisions at the point of impact. This reduces response time and builds organizational resilience.

        ### 2. Continuous Learning Culture
        Create systems that capture and share learning from both successes and failures. In uncertain environments, the ability to learn faster than competitors becomes a key advantage.

        ### 3. Scenario Planning
        Develop multiple scenarios for potential futures and create flexible strategies that can adapt to different outcomes.

        ## Conclusion

        Leadership in uncertainty requires a fundamental shift from command-and-control to empowerment and enablement. Leaders who master this transition will build organizations capable of thriving in any environment.
      `
    },
    {
      id: 4,
      title: "The Human Element in AI Implementation",
      excerpt: "Why successful AI adoption requires more than just technology—it demands a deep understanding of human psychology and organizational dynamics.",
      category: "ai",
      date: "2023-12-20",
      readTime: "6 min read",
      source: "Forbes",
      type: "external",
      url: "https://forbes.com/human-ai-implementation"
    },
    {
      id: 5,
      title: "Delegation as a Superpower: Multiplying Your Impact",
      excerpt: "How effective delegation becomes a force multiplier for leaders, enabling scale while empowering teams to reach their full potential.",
      category: "leadership",
      date: "2023-12-15",
      readTime: "7 min read",
      source: "Personal Blog",
      type: "internal",
      content: `
        Delegation is often misunderstood as simply assigning tasks to others. In reality, effective delegation is a sophisticated leadership skill that can multiply your impact exponentially.

        ## The Delegation Mindset

        True delegation starts with a fundamental belief: your team members are capable of excellence. This isn't naive optimism—it's a strategic choice that creates better outcomes for everyone involved.

        ### Why Leaders Struggle with Delegation

        - Fear of losing control
        - Belief that "I can do it faster myself"
        - Lack of trust in team capabilities
        - Perfectionism and micromanagement tendencies

        ## The Five Levels of Delegation

        ### Level 1: Do Exactly What I Say
        Basic task assignment with specific instructions.

        ### Level 2: Research and Report
        Gather information and present options.

        ### Level 3: Recommend and Act
        Make recommendations and implement with approval.

        ### Level 4: Decide and Inform
        Make decisions and communicate outcomes.

        ### Level 5: Full Autonomy
        Complete ownership within defined boundaries.

        ## Building Delegation Skills

        1. **Start Small**: Begin with low-risk tasks to build trust
        2. **Set Clear Expectations**: Define outcomes, not just processes
        3. **Provide Context**: Help team understand the "why" behind decisions
        4. **Create Safety**: Make it safe to ask questions and make mistakes

        ## The Multiplication Effect

        When done well, delegation doesn't just free up your time—it develops your team's capabilities, increases engagement, and creates a more resilient organization.
      `
    },
    {
      id: 6,
      title: "Quantum Computing: The Next Frontier for Entrepreneurs",
      excerpt: "Understanding the emerging opportunities in quantum computing and how entrepreneurs can position themselves for the quantum revolution.",
      category: "ai",
      date: "2023-12-01",
      readTime: "9 min read",
      source: "TechCrunch",
      type: "external",
      url: "https://techcrunch.com/quantum-computing-entrepreneurs"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Articles & Insights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Thoughts on leadership, innovation, artificial intelligence, and the future 
              of technology. Insights from over a decade of entrepreneurship and building 
              breakthrough solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span className="text-blue-600 font-medium">{article.source}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === 'ai' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'leadership' ? 'bg-purple-100 text-purple-800' :
                      article.category === 'innovation' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {categories.find(c => c.id === article.category)?.name.replace(' & Technology', '')}
                    </span>
                    
                    {article.type === 'external' ? (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {expandedArticle === article.id ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Expanded Content for Internal Articles */}
                {article.type === 'internal' && expandedArticle === article.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="prose prose-gray max-w-none">
                      <div dangerouslySetInnerHTML={{ 
                        __html: article.content?.replace(/\n/g, '<br/>').replace(/##/g, '<h3>').replace(/###/g, '<h4>') || ''
                      }} />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Topics Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Topics & Themes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring the intersection of technology, leadership, and innovation 
              through practical insights and strategic thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Technology</h3>
              <p className="text-gray-600">
                Insights on artificial intelligence implementation, technology strategy, 
                and the future of digital transformation in business.
              </p>
            </div>
            
            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
              <p className="text-gray-600">
                People-first leadership principles, delegation strategies, and building 
                high-performing teams in rapidly changing environments.
              </p>
            </div>
            
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Building innovation ecosystems, entrepreneurship insights, and strategies 
                for systematic breakthrough innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 