"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://linkedin.com" className="text-foreground hover:text-muted-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com" className="text-foreground hover:text-muted-foreground transition-colors">GitHub</a>
            <a href="mailto:contact@example.com" className="text-foreground hover:text-muted-foreground transition-colors">Email</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} saif.dev | <a href="#privacy" className="hover:text-foreground transition-colors">privacy?</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 