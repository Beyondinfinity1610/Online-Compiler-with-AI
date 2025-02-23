import React, { useState, useEffect } from 'react';
import { motion, useTransform, useScroll, AnimatePresence,useSpring } from 'framer-motion';
import { Code2, Terminal, Cpu, Box } from 'lucide-react';

import { useNavigate } from 'react-router-dom';


// Animation variants
const pageTransitions = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 0.95 },
  exit: { opacity: 0, scale: 0.95 }
};

// Terminal Animation Component



const teamMembers = [
  { name: "John Doe", role: "Lead Developer" },
  { name: "Jane Smith", role: "UI Designer" },
  { name: "Mike Johnson", role: "Backend Engineer" },
  { name: "Sarah Wilson", role: "Product Manager" }
];

const ModernDock = () => (
  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/5 flex flex-col items-center">
    <motion.div 
      className="w-full h-2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    
    <div className="relative w-4/5 h-8">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            style={{ top: `${i * 6}px` }}
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </div>

    <motion.div
      className="w-full h-12 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-full blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </div>
);
// Smart Compilation Component
const SmartCompilation = ({ onBack }) => (
  <motion.div
    variants={pageTransitions}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 bg-gray-900 overflow-auto scale-75"
  >
    <div className="h-full flex flex-col p-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Smart Compilation
      </motion.h2>
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gray-800 p-6 rounded-lg h-full">
          <h3 className="text-xl text-blue-400 mb-4">Real-time Analysis</h3>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded border border-gray-700">
              <code className="text-green-400">analyzing main.cpp...</code>
              <div className="mt-2 text-yellow-400">⚠ Potential memory leak detected in line 42</div>
            </div>
          </div>
        </div>
      </motion.div>
   <motion.button
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           onClick={onBack}
           className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
         >
           Back to Featues
         </motion.button>
    </div>
  </motion.div>
);

// Similar modifications for other feature components...
const CommandCenter = ({ onBack }) => (
  <motion.div
    variants={pageTransitions}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 bg-black overflow-auto"
  >
    <div className="h-full flex flex-col p-8">
      <motion.div 
        className="flex-1 bg-gray-900 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="text-green-400" size={24} />
          <h2 className="text-2xl text-green-400">Command Center</h2>
        </div>
        <div className="space-y-4">
          <motion.div 
            className="bg-black p-4 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400">$ compile --watch src/</p>
            <p className="text-gray-400 mt-2">Watching for file changes...</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={onBack}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
      >
        Back to Featues
      </motion.button>
    </div>
  </motion.div>
);
const PerformanceMetrics = ({ onBack }) => (
  <motion.div
    variants={pageTransitions}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 bg-gray-900 p-8 overflow-auto"
  >
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Performance Metrics
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl text-purple-400 mb-4">Compilation Speed</h3>
          <div className="relative pt-1">
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div 
                className="h-2 bg-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="mt-2 text-gray-300">75% faster than traditional compilers</p>
          </div>
        </div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={onBack}
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
      >
        Back to Featues
      </motion.button>
    </div>
  </motion.div>
);

// Package Management Component
const PackageManagement = ({ onBack }) => (
  <motion.div
    variants={pageTransitions}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 bg-gray-900 p-8 overflow-auto"
  >
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Package Management
      </motion.h2>
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="space-y-4">
          <motion.div 
            className="flex items-center justify-between p-4 bg-gray-900 rounded"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <Box className="text-orange-400" size={24} />
              <span className="text-white">Core Utilities</span>
            </div>
            <span className="text-green-400">v2.1.0</span>
          </motion.div>
        </div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={onBack}
        className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors"
      >
        Back to Terminal
      </motion.button>
    </div>
  </motion.div>
);






const LandingPage = () => {
  const [stage, setStage] = useState('terminal');
  const [activeFeature, setActiveFeature] = useState(null);
  const [hasLaunched, setHasLaunched] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { scrollYProgress } = useScroll();
  const [isExiting,setisExiting]=useState(false);
 

 const navigate=useNavigate();
  const features = [
    {
      icon: Code2,
      title: "Smart Compilation",
      component: SmartCompilation,
      color: "blue"
    },
    {
      icon: Terminal,
      title: "Command Center",
      component: CommandCenter,
      color: "green"
    },
    {
      icon: Cpu,
      title: "Performance",
      component: PerformanceMetrics,
      color: "purple"
    },
    {
      icon: Box,
      title: "Packages",
      component: PackageManagement,
      color: "orange"
    }
  ];
  
  const laptopScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    hasLaunched ? [1.5, 2] : [0.8, 1.5]
  );
  
  const laptopY = useTransform(
    scrollYProgress,
    [0, 0.2],
    hasLaunched ? ['0%', '-2%'] : ['0%', '-10%']
  );
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });
  useEffect(() => {
    if (!hasLaunched) {
      const unsubscribe = smoothScroll.onChange(value => {
        if (value < 0.3) setStage('terminal');
        else if (value < 0.6) setStage('features');
        else setStage('team');
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, hasLaunched]);
  const terminalOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0]);
  const featuresOpacity = useTransform(smoothScroll, [0.2, 0.6], [0, 1]);
  const teamOpacity = useTransform(smoothScroll, [0.5, 1], [0, 1]);

  useEffect(() => {
    // Show button after last message
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);


  const FeatureComponent = activeFeature !== null ? features[activeFeature].component : null;

  const terminalLines = [
    "$ curl example.com",
    "> Connecting to server...",
    "> Fetching content...",
    "> Loading resources...",
    "✓ Website loaded successfully"
  ];
  

const handleOpenWebsite = () => {
  setisExiting(true);
  setTimeout(() => {
    navigate("/login")
  }, 200); 
};


  return (
    <div className="relative w-full h-[300vh] bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]" />
      </div>

      <motion.div 
        className="fixed inset-0 flex items-center justify-center"
        style={{ 
          scale: laptopScale, 
          y: laptopY
        }}
      >
        <div className="relative w-[90vw] max-w-5xl aspect-[16/10] bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-8 border-gray-800">
          <AnimatePresence mode="wait">
            {stage === 'terminal' && (
              <motion.div
              style={{ opacity: terminalOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 justify-start bg-black flex flex-col"
              >
                <div className="flex-1 p-6 font-mono">
                  <div className="max-w-2xl ">
                    {terminalLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.75 }}
                        className="text-green-400 mb-3"
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                  {showButton && (
                    <motion.div
                    
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isExiting ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                  
                      className="p-4 flex"
                    >
                      <button
                        onClick={() => handleOpenWebsite()}
                        className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors font-medium"
                      >
                        Open Website
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
           
  

            {!hasLaunched && stage === 'features' && !FeatureComponent && (
              <motion.div
              style={{ opacity: featuresOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-gray-900 align-middle h-[80%"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 w-80% max-w-3xl h-90%">
                  {features.map((feature, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setActiveFeature(i)}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <feature.icon className="w-8 h-8 text-white mb-2" />
                      <p className="text-white text-sm font-medium">{feature.title}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

      
{(hasLaunched || stage === 'features') && FeatureComponent && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col bg-gray-900 p-20 mt-20"
    style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}
  >
    <div className="flex-1 overflow-y-auto">
      <div className="min-h-[800px] w-full max-w-4xl mx-auto p-6 scale-80">
        <FeatureComponent onBack={() => {
          setStage('features');
          setActiveFeature(null);
        }} />
      </div>
    </div>
  </motion.div>
)}
{stage === 'team' && (
  <motion.div
  style={{ opacity: teamOpacity }}
    initial={{ opacity: 0}}
    animate={{ opacity: 1  }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-center justify-center bg-gray-900 p-8"
  >
    <div className="w-full max-w-4xl">
      <motion.h2 
        className="text-3xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center p-6 bg-gray-800/80 rounded-xl backdrop-blur-sm hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 overflow-hidden flex items-center justify-center">
              <img 
                src="/api/placeholder/80/80" 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white text-center">{member.name}</h3>
            <p className="text-gray-400 text-sm text-center mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
)}


          </AnimatePresence>
        </div>
      </motion.div>

    </div>
  );
};

export default LandingPage;