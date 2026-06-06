import { useState } from "react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    try {
      const response = await fetch(
        "AQUI_VA_TU_WEBHOOK",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await response.json();

      const botMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* BOTON SOLO CUANDO EL CHAT ESTA CERRADO */}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 size-16 rounded-full bg-black text-white shadow-2xl text-2xl"
        >
          💬
        </button>
      )}

      {/* CHAT */}

      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-95 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">

          {/* HEADER */}

          <div className="flex items-center justify-between bg-black p-4 text-white">

            <h2 className="font-semibold">
              Asesor Virtual
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl"
            >
              ×
            </button>

          </div>

          {/* MENSAJES */}

          <div className="h-100 overflow-y-auto space-y-4 p-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-black text-white"
                      : "bg-zinc-100"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

          </div>

          {/* INPUT */}

          <div className="flex gap-2 p-4">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 rounded-xl border px-4 py-2 outline-none"
            />

            <button
              onClick={sendMessage}
              className="rounded-xl bg-black px-4 text-white"
            >
              Enviar
            </button>

          </div>

        </div>
      )}
    </>
  );
}