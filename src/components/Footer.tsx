"use client";
import { Heart, Github, Linkedin, Twitter, Mail, icons } from "lucide-react";
import { motion, scale } from "motion/react";
const Footer = () => {
  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/priyaanshusoni",
      label: "GitHub",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/priyanshu-soni-s27092003/",
      label: "LinkedIn",
    },
    { Icon: Twitter, href: "https://x.com/priyanshusept27", label: "Twitter" },
    { Icon: Mail, href: "mailto:priyanshusoni.dev@gmail.com", label: "Email" },
  ];
  return (
    <div className="py-10 border-t-white/10 border-t">
      <div className="mx-auto max-w-fit flex flex-col gap-8 items-center">
        <div className="flex items-center gap-6">
          {socialLinks.map(({ Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors relative"
              whileHover={{
                scale: 1.3,
                color: "#06b6d4",
                rotate: 360,
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.2,
                },
              }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <motion.div>
          <p className="flex gap-1.5 text-gray-400 items-center">
            Made With{" "}
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            By{" "}
            <motion.span className="gradient-text" whileHover={{ scale: 1.1 }}>
              Priyanshu Soni
            </motion.span>
          </p>
        </motion.div>

        <p className="text-gray-500">© 2025 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
