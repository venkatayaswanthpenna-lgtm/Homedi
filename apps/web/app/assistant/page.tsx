'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Send, Bot, Activity, ArrowLeft } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'ai',
    content: 'Hello! I am your AI Health Assistant. I can help you analyze your symptoms, set medication reminders, or parse your recent medical reports using AI.',
  },
];

const QUICK_PROMPTS = ['Check symptoms', 'Explain lab report', 'Medication reminder', 'Book appointment'];

const AI_RESPONSES: Record<string, string> = {
  default:
    'Thank you for sharing that. Based on your health profile, I recommend staying hydrated and monitoring your symptoms. If they worsen or persist beyond 24 hours, please consult Dr. Ramesh via Telemedicine. Disclaimer: I am an AI assistant, not a licensed medical professional.',
  fever:
    'A fever combined with a headache can be indicative of viral infections such as the flu or common cold. I recommend: 1) Rest and plenty of fluids 2) Paracetamol/Acetaminophen for fever management 3) Monitor temperature every few hours.\n\nIf temperature exceeds 103°F (39.4°C) or symptoms worsen rapidly, please use the Emergency SOS button.',
  appointment:
    "Sure! I can help you book an appointment. Dr. Ramesh Kumar (Cardiology) has availability today at 3 PM via Telemedicine, and Dr. Sarah Jenkins (General) has an in-person slot on Thursday at 10:30 AM. Would you like me to navigate you to the appointments page?",
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 1200));
    const lower = text.toLowerCase();
    const responseText =
      lower.includes('fever') || lower.includes('headache')
        ? AI_RESPONSES.fever
        : lower.includes('appointment') || lower.includes('book')
        ? AI_RESPONSES.appointment
        : AI_RESPONSES.default;

    const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'ai', content: responseText };
    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);

    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center space-x-3 sticky top-0 z-10">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="text-primary h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">HOMEDI AI Assistant</h1>
            <p className="text-xs text-secondary font-semibold flex items-center mt-0.5">
              <span className="w-2 h-2 bg-secondary rounded-full mr-1 animate-pulse" />
              Online — Health Intelligence Active
            </p>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`rounded-2xl p-4 max-w-[80%] whitespace-pre-line text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-sm shadow-md'
                      : 'bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-sm'
                  }`}
                >
                  {msg.role === 'ai' && msg.id === '1' ? (
                    <>
                      <p>{msg.content}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {QUICK_PROMPTS.map((p) => (
                          <button
                            key={p}
                            onClick={() => sendMessage(p)}
                            className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600 font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors"
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : msg.role === 'ai' ? (
                    <>
                      <p className="mb-2">{msg.content}</p>
                      <div className="bg-white border border-blue-100 rounded-xl p-3 border-l-4 border-l-blue-400 mt-2">
                        <div className="flex items-center text-blue-700 font-bold text-xs mb-1">
                          <Activity className="h-3.5 w-3.5 mr-1" /> AI Health Recommendation
                        </div>
                        <p className="text-xs text-gray-500 italic">
                          This is an AI-generated response. Always consult a licensed physician for medical decisions.
                        </p>
                      </div>
                    </>
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm p-4">
                  <div className="flex space-x-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </main>

        {/* Input */}
        <div className="border-t border-gray-100 bg-white p-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl flex items-center px-4 py-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                className="flex-1 bg-transparent py-2 outline-none text-gray-800 text-sm placeholder:text-gray-400"
                placeholder="Type your symptoms or health queries here..."
              />
              <Button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="rounded-xl w-9 h-9 p-0 flex items-center justify-center ml-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
