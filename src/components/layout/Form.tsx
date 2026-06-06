import React, { useState } from "react"
import toast from "react-hot-toast"


export default function Formulario() {
    const [loading, setLoading] = useState(false)

    const handleSubmitForm = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formulario = new FormData(e.currentTarget)

        const dataFormulario = {
            nombre: formulario.get("nombre"),
            email: formulario.get("email"),
            descripcion: formulario.get("descripcion")
            
        }
try {
  const response = await fetch("/api/contacto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataFormulario),
  });

  if (!response.ok) {
    throw new Error("Error en la API");
  }

  const result = await response.json();

  if (result.url) {
    window.open(result.url, "_blank");
    toast.success("Redirigiendo...");
  } else {
    toast.success("Mensaje enviado correctamente");
  }

} catch (error) {
  console.error(error);
  toast.error("Error al enviar formulario");
} finally {
  setLoading(false);
}
    }


  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Contactanos
            </h3>

            <form
            onSubmit={handleSubmitForm}
            >
                <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Nombre Completo
                    </label>
                    <input
                      placeholder="Example: John-Doe"
                      required
                      type="text"
                      className="flex grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="nombre"
                      name="nombre"
                    />
                </div>
                
                <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Descripción
                    </label>
                    <textarea
                      placeholder="Escribe tu mensaje aquí..."
                      required
                      className="flex grow w-full h-22 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="descripcion"
                      name="descripcion"
                    />
                </div>

                <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="email"
                      className="flex grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                </div>

                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wid transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-gray-800 text-white"
                    >
                      {loading ? "Enviando mensaje..." : "Enviar Mensaje"}
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}
