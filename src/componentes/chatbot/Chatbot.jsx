import React, { useState, useEffect, useRef } from 'react';
import { getBotResponse } from './chatbotEngine';
import './chatbot.css';

const WELCOME_MESSAGE = {
  id: 1,
  sender: 'bot',
  text: `👋 ¡Hola! Soy **Luis.bot**, el asistente de Luis Felipe Lozada.\n\nPuedes preguntarme sobre proyectos, tecnologías, formación, contacto o disponibilidad.\n\nEscribe **ayuda** para ver todos los temas.`
};

// Convierte **texto** en <strong>texto</strong> para negrita
const formatMessage = (text) => {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i}>
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} style={{ color: '#f4f4f5', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
          }
          return <span key={j}>{part}</span>;
        })}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    );
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageIdRef = useRef(2);

  // Scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Focus en el input al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const openChat = () => {
    setIsOpen(true);
    setIsClosing(false);
    setHasBeenOpened(true);
  };

  const closeChat = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const toggleChat = () => {
    if (isOpen) closeChat();
    else openChat();
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    // Añadir mensaje del usuario
    const userMsg = { id: messageIdRef.current++, sender: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simular delay de escritura del bot (natural)
    const delay = Math.min(400 + trimmed.length * 8, 1200);
    setTimeout(() => {
      const response = getBotResponse(trimmed);
      const botMsg = { id: messageIdRef.current++, sender: 'bot', text: response };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Ventana de chat */}
      {isOpen && (
        <div className={`chatbot-window ${isClosing ? 'closing' : ''}`}>

          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">L</div>
              <div>
                <div className="chatbot-name">Luis.bot</div>
                <div className="chatbot-status">
                  <span className="chatbot-status-dot"></span>
                  <span>En línea</span>
                </div>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={closeChat} aria-label="Cerrar chat">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                <div className="chat-bubble">
                  {formatMessage(msg.text)}
                </div>
              </div>
            ))}

            {/* Indicador "escribiendo..." */}
            {isTyping && (
              <div className="chat-message bot">
                <div className="typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              className="chatbot-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="> Escribe tu pregunta..."
              disabled={isTyping}
              maxLength={200}
              aria-label="Escribe tu mensaje"
            />
            <button
              className="chatbot-send-btn"
              onClick={sendMessage}
              disabled={!input.trim() || isTyping}
              aria-label="Enviar mensaje"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        className="chatbot-trigger"
        onClick={toggleChat}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con Luis.bot'}
        title="Chat con Luis.bot"
      >
        {/* Badge verde solo si nunca se ha abierto */}
        {!hasBeenOpened && <span className="chatbot-badge"></span>}

        {/* Ícono: cambia entre chat y X */}
        {isOpen ? (
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default Chatbot;
