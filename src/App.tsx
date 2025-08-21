import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Shield,
  Zap,
  Eye,
  MousePointer,
  Activity,
  ArrowLeft
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Open affiliate link on any button click
  const AFFILIATE_URL = 'https://www.semrush.com/lp/affiliate-program/en/';
  const handleGlobalButtonClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const button = target.closest('button');
    if (button) {
      window.open(AFFILIATE_URL, '_blank');
    }
  };

  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Discover high-value keywords with comprehensive data including search volume, difficulty, and trends."
    },
    {
      icon: BarChart3,
      title: "Site Audit",
      description: "Complete technical SEO analysis to identify and fix issues that impact your search rankings."
    },
    {
      icon: Target,
      title: "Competitor Analysis",
      description: "Analyze competitor strategies, keywords, and backlinks to stay ahead of the competition."
    },
    {
      icon: TrendingUp,
      title: "Rank Tracking",
      description: "Monitor your keyword rankings across multiple search engines and locations in real-time."
    },
    {
      icon: Globe,
      title: "Backlink Analysis",
      description: "Comprehensive backlink profile analysis with toxic link detection and outreach opportunities."
    },
    {
      icon: Users,
      title: "Social Media Tools",
      description: "Manage and analyze your social media presence across all major platforms from one dashboard."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "10,000 Keywords tracked",
        "5 Projects",
        "Basic Site Audit",
        "Competitor Analysis",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: [
        "100,000 Keywords tracked",
        "25 Projects",
        "Advanced Site Audit",
        "Full Competitor Analysis",
        "Backlink Analysis",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited Keywords",
        "Unlimited Projects",
        "White-label Reports",
        "API Access",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { value: "10M+", label: "Keywords Database" },
    { value: "500K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dominate Search Rankings with
              <span className="text-blue-600"> SEMrush</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The complete SEO and digital marketing platform trusted by over 500,000 professionals worldwide. 
              Boost your organic traffic, outrank competitors, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Dashboard</h2>
            <p className="text-xl text-gray-600">Get actionable insights from our intuitive and powerful interface</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 p-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                  <p className="text-blue-100">Your complete SEO performance at a glance</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                    <span className="text-green-600 text-sm font-medium">+12.5%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
                  <div className="text-gray-600">Organic Keywords</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="h-8 w-8 text-green-600" />
                    <span className="text-green-600 text-sm font-medium">+8.3%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">45,382</div>
                  <div className="text-gray-600">Monthly Traffic</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <Eye className="h-8 w-8 text-purple-600" />
                    <span className="text-green-600 text-sm font-medium">+15.2%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">92.4</div>
                  <div className="text-gray-600">SEO Score</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Keyword "digital marketing" ranked #3</span>
                    </div>
                    <span className="text-gray-500 text-sm">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">New backlink from authority site</span>
                    </div>
                    <span className="text-gray-500 text-sm">5 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Site audit completed - 3 issues found</span>
                    </div>
                    <span className="text-gray-500 text-sm">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Every SEO Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From keyword research to competitor analysis, we provide all the tools you need to succeed in search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SEMrush Works
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to SEO success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
            
            <div className="text-center relative">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-600 text-sm font-bold px-3 py-1 rounded-full">
                Step 1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Analyze & Audit</h3>
              <p className="text-gray-600">Connect your website and get instant insights into your current SEO performance and opportunities</p>
            </div>

            <div className="text-center relative">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-600 text-sm font-bold px-3 py-1 rounded-full">
                Step 2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Optimize & Plan</h3>
              <p className="text-gray-600">Get actionable recommendations and create a custom SEO strategy based on your goals</p>
            </div>

            <div className="text-center relative">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-600 text-sm font-bold px-3 py-1 rounded-full">
                Step 3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">Track & Grow</h3>
              <p className="text-gray-600">Monitor your progress, track rankings, and watch your organic traffic grow month over month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'border-2 border-blue-500 relative bg-blue-50' : 'border border-gray-200 bg-white'} transition-all duration-300 hover:shadow-xl`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                99.9% Uptime
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                5-Star Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 500,000 professionals who trust SEMrush to grow their organic traffic and outrank competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-blue-100">
            <p>No credit card required • 14-day free trial • Setup in 2 minutes</p>
          </div>
        </div>
      </section>
    </>
  );

  const renderAboutPage = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About SEMrush</h1>
          
          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At SEMrush, we empower businesses of all sizes to dominate their digital presence through comprehensive SEO and marketing intelligence. Our mission is to democratize access to powerful marketing insights that were once available only to enterprise-level organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Founded in 2008</h3>
              <p className="text-gray-600">Started as a small team with a big vision to revolutionize digital marketing intelligence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">500K+ Users</h3>
              <p className="text-gray-600">Trusted by marketing professionals, agencies, and businesses worldwide.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            SEMrush is an all-in-one digital marketing toolkit that provides comprehensive solutions for SEO, PPC, content marketing, social media, and competitive research. Our platform combines powerful data analytics with intuitive tools to help you make informed marketing decisions.
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h4>
                <p className="text-gray-600">Providing accurate, up-to-date data you can trust for critical business decisions.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600">Continuously evolving our platform with cutting-edge features and insights.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600">Delivering exceptional user experience and world-class customer support.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SEMrush?</h2>
          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Data Coverage</h4>
                <p className="text-gray-700">Access to over 10 million keywords, 500 million domains, and real-time competitive intelligence.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">User-Friendly Interface</h4>
                <p className="text-gray-700">Intuitive dashboard and tools designed for both beginners and advanced marketers.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Expert Support</h4>
                <p className="text-gray-700">Dedicated customer success team ready to help you maximize your marketing ROI.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-500 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">Join thousands of successful marketers who trust SEMrush for their digital marketing needs.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacyPage = () => (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <p className="text-gray-700 mb-2"><strong>Last updated:</strong> January 2025</p>
            <p className="text-gray-700">
              This Privacy Policy describes how SEMrush collects, uses, and protects your personal information when you use our services.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Name and contact information (email, phone number)</li>
              <li>• Account credentials and profile information</li>
              <li>• Payment and billing information</li>
              <li>• Communication preferences</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Website and application usage data</li>
              <li>• Search queries and tool interactions</li>
              <li>• Device information and IP addresses</li>
              <li>• Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide and maintain our services</li>
                <li>• Process payments and transactions</li>
                <li>• Deliver customer support</li>
                <li>• Send service-related communications</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Analyze usage patterns and trends</li>
                <li>• Improve our products and services</li>
                <li>• Develop new features</li>
                <li>• Conduct research and analytics</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection & Security</h2>
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                <p className="text-gray-600 text-sm">All data transmitted using industry-standard SSL encryption</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                <p className="text-gray-600 text-sm">GDPR, CCPA, and other privacy regulation compliant</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Access Control</h4>
                <p className="text-gray-600 text-sm">Strict access controls and regular security audits</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Access & Portability</h4>
                <p className="text-gray-700">Request access to your personal data and receive it in a portable format</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Correction & Updates</h4>
                <p className="text-gray-700">Update or correct any inaccurate personal information</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Deletion</h4>
                <p className="text-gray-700">Request deletion of your personal data (subject to legal requirements)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Opt-out</h4>
                <p className="text-gray-700">Unsubscribe from marketing communications at any time</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                <p className="text-gray-600 text-sm">Required for basic site functionality and security</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                <p className="text-gray-600 text-sm">Help us understand how you use our services</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="bg-gradient-to-r from-blue-600 to-green-500 p-6 rounded-xl text-white">
            <p className="mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> privacy@semrush.com</p>
              <p><strong>Address:</strong> SEMrush Privacy Team, 123 Digital Avenue, Tech City, TC 12345</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white" onClickCapture={handleGlobalButtonClick}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Target className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">SEMrush</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Features</button>
                <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</button>
                <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
              <button onClick={() => setCurrentPage('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Features</button>
              <button onClick={() => setCurrentPage('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Pricing</button>
              <button onClick={() => setCurrentPage('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</button>
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors rounded-lg mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'about' && renderAboutPage()}
      {currentPage === 'privacy' && renderPrivacyPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">SEMrush</span>
              </div>
              <p className="text-gray-400 mb-4">
                The complete SEO and digital marketing platform for modern businesses.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button className="hover:text-white transition-colors">API</button></li>
                <li><button className="hover:text-white transition-colors">Integrations</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button className="hover:text-white transition-colors">Blog</button></li>
                <li><button className="hover:text-white transition-colors">Careers</button></li>
                <li><button className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Help Center</button></li>
                <li><button className="hover:text-white transition-colors">Documentation</button></li>
                <li><button className="hover:text-white transition-colors">Status</button></li>
                <li><button className="hover:text-white transition-colors">Security</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SEMrush. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => setCurrentPage('privacy')} className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;