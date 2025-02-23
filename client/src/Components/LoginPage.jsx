import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: { opacity: 0, scale: 0.95 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: -5,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function LoginPage() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        emailId,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", response.data.user.emailId);
      localStorage.setItem("userName", response.data.user.name);

      navigate("/editor");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
  <div className="w-full h-full bg-black">
    <motion.div
      className="min-h-screen flex items-center justify-center bg-blue"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="bg-[#161e18] p-8 rounded-lg shadow-md w-96 border border-[#ECDFCC] text-[#ECDFCC]"
        variants={itemVariants}
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-[#ECDFCC]"
          variants={itemVariants}
        >
          Code Editor Login
        </motion.h2>
        {error && (
          <motion.div
            className="bg-red-900 border border-red-700 text-[#ECDFCC] px-4 py-3 rounded mb-4"
            variants={itemVariants}
          >
            {error}
          </motion.div>
        )}
        <motion.form onSubmit={handleLogin} variants={itemVariants}>
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-[#ECDFCC] text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full px-3 py-2 border border-[#ECDFCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4DAD2] bg-[#161e18] text-[#ECDFCC]"
              required
            />
          </motion.div>
          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-[#ECDFCC] text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-[#ECDFCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4DAD2] bg-[#161e18] text-[#ECDFCC]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ECDFCC] hover:text-[#C4DAD2]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-[#161e18] border border-[#ECDFCC] text-[#ECDFCC] py-2 px-4 rounded-lg hover:bg-[#C4DAD2] hover:text-black transition duration-150"
            variants={itemVariants}
          >
            Login
          </motion.button>
          <motion.p
            className="mt-4 text-center text-[#ECDFCC]"
            variants={itemVariants}
          >
            Don't have an account?{" "}
            <Link to="/register" className="text-[#C4DAD2] hover:text-[#ECDFCC]">
              Register here
            </Link>
          </motion.p>
        </motion.form>
      </motion.div>
    </motion.div>
    </div>
  );
}

export default LoginPage;
