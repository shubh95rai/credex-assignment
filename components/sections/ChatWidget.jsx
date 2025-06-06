"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Bot } from "lucide-react";

const faqs = [
  {
    question: "How do I sell my license?",
    answer:
      "Just upload your license, we’ll give you a valuation, and you get paid!",
  },
  {
    question: "How long does it take?",
    answer: "Typically, the whole process takes 2-3 business days.",
  },
  {
    question: "Is it safe?",
    answer: "Yes, our platform is secure and trusted by many businesses.",
  },
  {
    question: "What types of software can I sell?",
    answer:
      "We support popular software like Microsoft Office, Adobe Suite, and more.",
  },
  {
    question: "Do I need to provide proof of purchase?",
    answer:
      "Yes, we require a valid proof of purchase to verify license ownership.",
  },
];

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! Choose a question below to get started.",
    },
  ]);

  const handleFAQClick = (faq) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: faq.question },
      { role: "assistant", content: faq.answer },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50">
      {chatOpen && (
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="absolute right-0 -top-8"
          size={"sm"}
        >
          Close
        </Button>
      )}

      {!chatOpen && (
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="p-6 sm:p-7 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 hover:text-white transition-all duration-300 shadow-xl dark:bg-indigo-600 dark:hover:bg-indigo-700"
          variant="outline"
        >
          <Bot className="sm:size-8 size-6" />
        </Button>
      )}

      {chatOpen && (
        <div className="w-72 sm:w-80 max-h-83 bg-card border shadow-lg rounded-md mt-2 flex flex-col">
          <div className="overflow-y-auto p-3">
            <div className="flex-1 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-[13px] sm:text-sm ${
                    msg.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.role === "user"
                        ? "bg-indigo-200 text-neutral-800"
                        : "bg-secondary"
                    }`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
              <div className="mt-4 border-t border-gray-200 pt-4">
                {faqs.map((faq, i) => (
                  <Button
                    key={i}
                    onClick={() => handleFAQClick(faq)}
                    className="w-full mb-2 text-[13px] sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-neutral-100"
                  >
                    {faq.question}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
