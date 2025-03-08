"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatToggle = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! I\'m Saif Support. How can I help you today?' }
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    setChatMessages([...chatMessages, { sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Thanks for your message! This is a placeholder response. In a real implementation, this would connect to an AI service.' 
      }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        className="text-xs px-3 py-1.5 border border-border rounded-full hover:bg-secondary transition-all relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        <motion.div
          className="absolute inset-0 bg-secondary opacity-0"
          initial={false}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
        />
        <span className="relative z-10">Chat Toggle</span>
      </motion.button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed bottom-4 right-4 w-80 h-96 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between p-3 border-b border-border">
              <h3 className="font-medium">Chat with Saif Support</h3>
              <motion.button 
                onClick={toggleChat}
                className="p-1 rounded-md hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            <div className="p-3 h-[calc(100%-8rem)] overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <motion.div 
                  key={index}
                  className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className={`rounded-lg p-2.5 max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-primary-foreground ml-auto' 
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-border bg-card">
              <div className="flex">
                <input 
                  type="text" 
                  value={message}
                  onChange={handleMessageChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..." 
                  className="flex-1 p-2 text-sm bg-secondary rounded-l-md focus:outline-none"
                />
                <motion.button 
                  className="bg-primary text-primary-foreground p-2 rounded-r-md"
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatToggle; 