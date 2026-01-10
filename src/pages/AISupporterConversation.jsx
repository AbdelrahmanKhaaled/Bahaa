import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import plus from '../assets/plus.png';
import voice from '../assets/voice.png';
import send from '../assets/send.png';

const STORAGE_KEY = 'ai_supporter_messages';

const AISupporterConversation = () => {
  const location = useLocation();
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage on mount
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const processedTimestamp = useRef(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Handle incoming audio message from voice page
  useEffect(() => {
    if (location.state?.audioMessage) {
      const audioMsg = location.state.audioMessage;
      
      // Only process if we haven't already processed this timestamp
      if (processedTimestamp.current !== audioMsg.timestamp) {
        processedTimestamp.current = audioMsg.timestamp;
        
        // Add user audio message
        setMessages(prev => [...prev, {
          type: 'user',
          text: '🎤 Voice message',
          audio: audioMsg.url,
          timestamp: audioMsg.timestamp
        }]);

        // Simulate AI response after a delay
        setIsWaitingForResponse(true);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'ai',
            text: "I've received your voice message. How can I assist you today?"
          }]);
          setIsWaitingForResponse(false);
        }, 2000);

        // Clear the location state to prevent re-adding on refresh
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', text: inputValue }]);
      setInputValue('');
      
      // Simulate AI response
      setIsWaitingForResponse(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai',
          text: "Thank you for your message. How else can I help you?"
        }]);
        setIsWaitingForResponse(false);
      }, 1500);
    }
  };

  const clearConversation = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="max-w-[1440px] mx-auto px-[100px] py-16 pt-[180px]">
        {/* Chat Interface */}
        <div className="max-w-[952px] mx-auto">
          {/* Clear button (optional) */}
          {messages.length > 0 && (
            <div className="flex justify-end mb-4">
              <button
                onClick={clearConversation}
                className="text-gray-500 hover:text-red-500 text-sm font-salsa underline"
              >
                Clear conversation
              </button>
            </div>
          )}

          {/* Chat Messages */}
          <div className="space-y-6 mb-8 min-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3xl rounded-2xl font-salsa text-[16px] ${
                    message.type === 'user'
                      ? 'bg-[#243e7a] text-white p-6'
                      : 'bg-[#f4f5f8] text-[#7e7e7e] p-6'
                  }`}
                >
                  <p className="leading-relaxed">{message.text}</p>
                  {message.audio && (
                    <audio controls className="mt-3 w-full">
                      <source src={message.audio} type="audio/wav" />
                    </audio>
                  )}
                </div>
              </div>
            ))}
            {isWaitingForResponse && (
              <div className="flex justify-start">
                <div className="bg-[#f4f5f8] text-[#7e7e7e] p-6 rounded-2xl">
                  <p className="leading-relaxed font-salsa">AI is thinking...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-[rgba(35,62,121,0.05)] rounded-[150px] p-[20px] flex items-center gap-4">
            <div className="flex-1 flex items-center gap-4 px-8">
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <img src={plus} alt="plus" className="w-full h-full object-cover" />
              </div>
              <input
                type="text"
                placeholder="ask any think"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 outline-none bg-transparent text-[20px] font-salsa text-[#888] placeholder-[#888]"
              />
            </div>
            <div className="flex gap-3 pr-4">
              <div className="flex gap-3 pr-4">
                <Link to="/ai-supporter/voice" className="w-[30px] h-[30px] flex items-center justify-center">
                  <img src={voice} alt="voice" className="w-full h-full object-cover" />
                </Link>
                <button onClick={handleSend} className="w-[30px] h-[30px] flex items-center justify-center">
                  <img src={send} alt="send" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISupporterConversation;
