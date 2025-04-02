import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, Sparkles, Upload, Zap, MessageSquareText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './images/logo-nobg-large.png'

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #5296F4 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <nav className="absolute top-0 w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center sm:justify-between justify-center">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <img src={Logo} alt="BoomerAI Logo" className="w-20 -mr-2" />
                <span className="text-2xl font-bold">BoomerAI</span>
              </div>
            </Link>
            {/* Przycisk widoczny tylko na większych ekranach */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hidden sm:flex hover:bg-primary-dark px-6 py-2 rounded-lg font-medium transition-colors items-center gap-2"
            >
              <span>Add to Chrome</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </nav>



        <div className="pt-32 pb-20 px-6 mt-10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary-darker bg-clip-text text-transparent animate-gradient">
                Transform Your Prompts into Masterpieces
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                BoomerAI enhances your prompts instantly, making AI interactions more effective and precise. Perfect for students, professionals, and anyone working with AI.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="z-10 flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  <Chrome className="w-5 h-5" />
                  <span>Add to Chrome - It's Free</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="z-10 flex items-center justify-center space-x-2 bg-dark-lighter hover:bg-dark-light px-8 py-3 rounded-lg font-medium transition-colors border border-primary/20"
                >
                  <Sparkles className="w-5 h-5" />
                  <a href="#demo">
                    <span>See How It Works</span>
                  </a>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 bg-dark-lighter relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 0% 0%, #5296F4 0%, transparent 30%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">How BoomerAI Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Upload className="w-8 h-8 text-primary" />}
                title="Upload Your Assignment"
                description="Simply paste your assignment or task into the extension."
              />
              <FeatureCard
                icon={<Sparkles className="w-8 h-8 text-primary" />}
                title="AI Enhancement"
                description="Our AI analyzes and transforms your input into an optimized prompt."
              />
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-primary" />}
                title="Instant Results"
                description="Get perfectly crafted prompts in seconds, ready to use with any AI tool."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id='demo' className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-dark-lighter rounded-2xl p-8 flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">See the Magic in Action</h3>
              <p className="text-gray-400 mb-6">
                Watch how BoomerAI transforms a simple assignment into a powerful, detailed prompt that gets you better results.
              </p>
              <div className="space-y-4">
                <DemoStep
                  number="1"
                  title="Input Your Text"
                  description="Paste your assignment or task description"
                />
                <DemoStep
                  number="2"
                  title="One-Click Enhancement"
                  description="Let BoomerAI work its magic"
                />
                <DemoStep
                  number="3"
                  title="Perfect Prompts"
                  description="Get optimized prompts instantly"
                />
              </div>
            </div>
            <div className="flex-1 bg-dark rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquareText className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-400">Example Transformation</span>
              </div>
              <div className="space-y-4">
                <div className="bg-dark-lighter p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Original:</p>
                  <p>"Write about climate change"</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-gray-400 text-sm">BoomerAI Enhanced:</p>
                  <p className="text-primary">"Create a comprehensive analysis of climate change, including its current global impact, key contributing factors, recent scientific data, and potential solutions. Include specific examples of environmental changes, reference recent studies, and discuss both individual and policy-level actions for mitigation."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="BoomerAI Logo" className="w-20 -mr-2" />
              <span className="text-xl font-bold">BoomerAI</span>
            </div>
          </Link>
          <div className="text-gray-400 text-sm">
            © 2025 BoomerAI. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/legal" className="text-gray-400 hover:text-gray-200 text-sm">
              Legal
            </Link>
            <a className='hover:text-gray-500 text-[#565D68]' href="https://boomerai.com" target="_blank">BoomerAI</a> by <a className='hover:text-gray-500 text-[#565D68]' href="https://bkrupka.com" target="_blank">BKrupka</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="bg-dark p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function DemoStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default App;