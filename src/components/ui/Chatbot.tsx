"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Sparkles, Send, User, Bot } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Input, message } from "antd";

const Chatbot = () => {
  const [isOpen, setisOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Priyanshu's assistant. Ask me anything about his work 👋",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleChat = async () => {
    try {
      const newMessages = [
        ...messages,
        {
          role: "user",
          content: input,
        },
      ];

      setMessages(newMessages);

      setTyping(true);

      const payload = {
        messages: newMessages,
      };
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data?.data?.candidates[0].content?.parts[0]?.text,
        },
      ]);
      setInput("");
    } catch (error) {
      console.error("Error:", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setTyping(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const messagesEnd = messagesEndRef.current as HTMLDivElement;

    if (messagesEnd) messagesEnd.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <>
      <motion.div
        className="fixed z-20 cursor-pointer  bottom-[2rem] right-[1.6rem] glass rounded-full p-4 shadow-2xl shadow-blue-500/30 "
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 50px rgba(59, 130, 246, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key={"close"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{
                rotate: 90,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-fit"
            >
              <X className="text-cyan-400  w-6 h-6 lg:w-8 lg:h-8" />
            </motion.span>
          ) : (
            <motion.span
              key={"open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{
                rotate: 90,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <MessageCircle className="text-cyan-400  w-6 h-6 lg:w-8 lg:h-8" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div className="fixed bottom-30 right-4 md:right-8 z-50 lg:w-full w-[90%] h-[500px] flex flex-col max-w-md glass rounded-3xl shadow-2xl shadow-blue-500/20 overflow-hidden   border border-blue-500/20">
            {/* Header */}

            <div className="flex items-center justify-between w-full  text-sm   lg:text-[16px]  p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white">
              <div className="flex gap-2 items-center ">
                <motion.span
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.span>

                <div className="flex flex-col items-start gap-2">
                  <h3>Priyanshu's Assistant</h3>
                </div>
              </div>

              <span onClick={() => setisOpen(!isOpen)}>
                <X className="w-6 h-6 text-gray-400 cursor-pointer" />
              </span>
            </div>

            {/* Messages */}

            <div className=" text-sm lg:text-[16px] flex-1 flex flex-col gap-4 p-4 overflow-y-auto text-white bg-gradient-to-b from-transparent to-black/30">
              {messages?.map((msg, index) => {
                const isAssistant = msg.role === "assistant";
                const isUser = msg.role === "user";

                return isAssistant ? (
                  <div
                    key={index}
                    className="flex items-start gap-2 self-start "
                  >
                    <span className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-2">
                      <Bot className="w-6 h-6 text-white" />
                    </span>

                    <p className="p-4 rounded-lg glass border border-blue-500/20 text-gray-100">
                      {msg.content}
                    </p>
                  </div>
                ) : isUser ? (
                  <div key={index} className="flex items-start gap-2 self-end">
                    <p className="p-4 rounded-lg border border-white/10 bg-gradient-to-br from-blue-500 to-cyan-500 ">
                      {msg.content}
                    </p>

                    <span className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-2">
                      <User className="w-6 h-6 text-white" />
                    </span>
                  </div>
                ) : null;
              })}

              {typing && (
                <div className="flex items-start gap-2 self-start ">
                  <span className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-2">
                    <Bot className="w-6 h-6 text-white" />
                  </span>

                  <div className="flex gap-2 items-center">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <motion.span
                        key={index}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          y: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="h-2 w-2 bg-cyan-500 rounded-full "
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Bar */}

            <div className="flex gap-4 p-4 items-center">
              <Input
                onChange={(e) => setInput(e?.target.value)}
                onPressEnter={handleChat}
                value={input}
                placeholder={"Ask me anything.."}
                className="glass flex-1 !w-auto !px-4 !py-3 !bg-white/5 !border !border-white/10 !rounded-full !text-white !placeholder-gray-500 !focus:outline-none !focus:border-cyan-500 !transition-colors"
              />

              <button
                disabled={!input.trim()}
                onClick={handleChat}
                className="w-10 h-10  cursor-pointer disabled:cursor-not-allowed rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center disabled:opacity-50 "
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
