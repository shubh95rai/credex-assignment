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
    <div className="fixed bottom-10 right-10 z-50">
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
          className="px-6 py-7 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 hover:text-white transition-all duration-300 shadow-xl"
          variant="outline"
        >
          <Bot className="size-8" />
        </Button>
      )}

      {chatOpen && (
        <div className="w-80 max-h-83 bg-white border shadow-lg rounded-md mt-2 flex flex-col">
          <div className="overflow-y-auto p-3">
            <div className="flex-1  space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm ${
                    msg.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.role === "user" ? "bg-blue-100" : "bg-gray-200"
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
                    className="w-full mb-2 text-sm bg-indigo-600 hover:bg-indigo-700"
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
