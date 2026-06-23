"use client";

import { MessageCircle, Send, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LOGO_SRC } from "@/lib/brand-assets";
import { brand } from "@/lib/brand";

type Message = { from: "bot" | "user"; text: string };

const INITIAL_MESSAGES: Message[] = [
  {
    from: "bot",
    text: "¿Necesitas un presupuesto rápido? Te ayudamos.",
  },
];

const QUICK_REPLIES = [
  "Quiero una muestra gratuita",
  "Necesito presupuesto",
  "¿Qué productos tenéis?",
] as const;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [showBubble, setShowBubble] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setShowBubble(false);
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function reply(text: string) {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "¡Perfecto! Para preparar tu presupuesto, ¿cuántos kilos necesitas por semana y qué cítrico te interesa más?",
        },
      ]);
    }, 800);
  }

  function send() {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    reply(text);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {!open && showBubble && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="max-w-[240px] animate-fade-in rounded-2xl border border-black/6 bg-white px-4 py-3 text-left text-xs leading-relaxed text-[#111111] shadow-xl transition-transform hover:scale-[1.02] sm:max-w-[280px]"
        >
          <span className="font-semibold">Asistente La Rodaja</span>
          <p className="mt-1 text-[#6B6B6B]">
            ¿Necesitas un presupuesto rápido? Te ayudamos.
          </p>
        </button>
      )}

      {open && (
        <div className="w-[320px] overflow-hidden rounded-2xl border border-black/8 bg-white shadow-2xl sm:w-[360px]">
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ background: brand.black }}
          >
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_SRC}
                alt="La Rodaja"
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  Asistente La Rodaja
                </p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: brand.lime }}
                  />
                  <span className="text-xs text-white/50">En línea</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/50 transition-colors hover:text-white"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex h-72 flex-col gap-3 overflow-y-auto bg-[#F5F5F3] px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    msg.from === "user"
                      ? "rounded-br-sm text-[#111111]"
                      : "rounded-bl-sm border border-black/6 bg-white text-[#111111]"
                  }`}
                  style={
                    msg.from === "user"
                      ? { background: brand.lemon }
                      : undefined
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => reply(q)}
                    className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-[11px] font-medium text-[#111111] transition-colors hover:border-[#A8D600]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={endRef} />
          </div>

          <div className="flex gap-2 border-t border-black/6 bg-white px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 rounded-xl border border-black/8 bg-[#F5F5F3] px-3 py-2.5 text-xs focus:border-[#A8D600] focus:outline-none"
            />
            <button
              type="button"
              onClick={send}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all hover:brightness-110"
              style={{ background: brand.lime }}
              aria-label="Enviar mensaje"
            >
              <Send size={14} color={brand.black} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-200 hover:scale-105"
        style={{ background: brand.black }}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <>
            <MessageCircle size={22} className="text-white" />
            <span
              className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-[#111111]"
              style={{ background: brand.lime }}
            >
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
}
