"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatToggle = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <motion.button
        className="text-xs px-3 py-1.5 border border-border rounded-full hover:bg-secondary transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        Chat Toggle
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
              <button 
                onClick={toggleChat}
                className="p-1 rounded-md hover:bg-secondary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-3 h-[calc(100%-4rem)] overflow-y-auto">
              <div className="mb-3">
                <div className="bg-secondary rounded-lg p-2 max-w-[80%]">
                  <p className="text-sm">Hi there! I'm Saif Support. How can I help you today?</p>
                </div>
              </div>
              
              {/* Example chat messages would go here */}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-border bg-card">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 p-2 text-sm bg-secondary rounded-l-md focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground p-2 rounded-r-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatToggle; 