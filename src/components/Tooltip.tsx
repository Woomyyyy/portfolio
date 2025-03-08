"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const Tooltip = ({ 
  content, 
  children, 
  position = 'top', 
  delay = 300 
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let x = 0;
      let y = 0;
      
      switch (position) {
        case 'top':
          x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          y = triggerRect.top - tooltipRect.height - 8;
          break;
        case 'bottom':
          x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          y = triggerRect.bottom + 8;
          break;
        case 'left':
          x = triggerRect.left - tooltipRect.width - 8;
          y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          break;
        case 'right':
          x = triggerRect.right + 8;
          y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          break;
      }
      
      // Adjust if tooltip would go off screen
      const padding = 10;
      x = Math.max(padding, Math.min(x, window.innerWidth - tooltipRect.width - padding));
      y = Math.max(padding, Math.min(y, window.innerHeight - tooltipRect.height - padding));
      
      setTooltipPosition({ x, y });
    }
  }, [isVisible, position]);

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="inline-block relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={triggerRef}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            className="fixed z-50 max-w-xs bg-popover text-popover-foreground text-sm p-2 rounded-md shadow-md border border-border"
            style={{ 
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transformOrigin: position === 'top' ? 'bottom center' : 
                              position === 'bottom' ? 'top center' : 
                              position === 'left' ? 'right center' : 'left center'
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            {content}
            <div 
              className={`absolute w-2 h-2 bg-popover border-border ${
                position === 'top' ? 'border-b border-r bottom-[-5px] left-1/2 transform -translate-x-1/2 rotate-45' :
                position === 'bottom' ? 'border-t border-l top-[-5px] left-1/2 transform -translate-x-1/2 rotate-45' :
                position === 'left' ? 'border-t border-r right-[-5px] top-1/2 transform -translate-y-1/2 rotate-45' :
                'border-b border-l left-[-5px] top-1/2 transform -translate-y-1/2 rotate-45'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip; 