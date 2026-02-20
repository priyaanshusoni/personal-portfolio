"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { motion } from "motion/react";
import { Form, Input, Button, message as antMessage } from "antd";
import { FORM_ITEMS } from "@/lib/constants";
import { Send } from "lucide-react";

import { useState } from "react";

export const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [formInstance] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const { name, email, message, subject } = formInstance.getFieldsValue();
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ name, email, message, subject }),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setLoading(true);

      antMessage.success("Message sent successfully");
      formInstance.resetFields();
    } catch (error) {
      console.error(error);
      antMessage.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 flex flex-col items-center gap-4" id="contact">
      <h2 className="gradient-text text-2xl font-bold">Get In Touch</h2>

      <p className="text-gray-400">
        Have a project in mind or just want to chat? Feel free to reach out!
      </p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-white text-2xl font-bold">
            Let&apos;s talk about everything!
          </h3>
          <p className="text-gray-400">
            Don&apos;t like forms? Send me an email directly, or connect with me
            on social media. I&apos;m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col gap-4 w-11/12">
            {Object.entries(CONTACT_INFO).map(([key, value], index) => (
              <a
                key={key}
                className="p-5 glass rounded-2xl  group relative overflow-hidden cursor-pointer w-full "
                href={value?.method}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={value?.label}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    className="glass p-3 rounded-xl text-cyan-400 relative z-10"
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      },
                    }}
                  >
                    <value.icon className="w-6 h-6" />
                  </motion.span>

                  <p className="text-white group-hover:scale-105 transition-transform duration-500">
                    {value?.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Google Maps Container */}
          <div></div>
        </div>

        {/* Form Container */}

        <div>
          <Form
            requiredMark={false}
            layout="vertical"
            form={formInstance}
            onFinish={handleSubmit}
          >
            {FORM_ITEMS?.map((item, index) => {
              if (item?.nodeType === "input") {
                return (
                  <Form.Item
                    key={index}
                    name={item?.name}
                    label={item?.label}
                    rules={item?.rules}
                  >
                    <Input
                      placeholder={item?.placeholder}
                      className="glass !w-full !px-4 !py-3 !bg-white/5 !border !border-white/10 !rounded-xl !text-white !placeholder-gray-500 !focus:outline-none !focus:border-cyan-500 !transition-colors"
                    />
                  </Form.Item>
                );
              } else if (item?.nodeType === "textarea") {
                return (
                  <Form.Item
                    key={index}
                    name={item?.name}
                    label={item?.label}
                    rules={item?.rules}
                  >
                    <Input.TextArea
                      maxLength={100}
                      // showCount
                      placeholder={item?.placeholder}
                      className="glass !w-full !px-4 !py-3 !bg-white/5 !border !border-white/10 !rounded-xl !text-white !placeholder-gray-500 !focus:outline-none !focus:border-cyan-500 !transition-colors"
                      rows={4}
                    />
                  </Form.Item>
                );
              } else
                return (
                  <Form.Item
                    key={index}
                    name={item?.name}
                    label={item?.label}
                    rules={item?.rules}
                  >
                    <Input
                      placeholder={item?.placeholder}
                      className="glass !w-full !px-4 !py-3 !bg-white/5 !border !border-white/10 !rounded-xl !text-white !placeholder-gray-500 !focus:outline-none !focus:border-cyan-500 !transition-colors"
                    />
                  </Form.Item>
                );
            })}

            <Form.Item>
              <Button
                className="primary-btn"
                htmlType="submit"
                aria-label="submit"
                type="primary"
                loading={loading}
              >
                Send Message
                <motion.span
                  className="relative z-10"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Send className="w-4 h-4" />
                </motion.span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
