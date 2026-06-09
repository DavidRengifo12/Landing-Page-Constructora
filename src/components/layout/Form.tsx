import toast from "react-hot-toast"
import { contactSchema, type ContactFormData } from "../../schema/contactSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { envioFormulario } from "../../service/contactService"


export default function Formulario() {

  const onSubmit = async(data: ContactFormData) => {
    try {
      const result = await envioFormulario(data)
      if(result.url){
        window.open(result.url, "__blank")
        toast.success("Enviando mensaje")
        return
      }

      toast.success("Mensaje enviado con exito")
    } catch (error) {
      console.error(error)
      toast.error("Error al enviar mensaje")
    }
  }

    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<ContactFormData>({
      resolver: zodResolver(contactSchema)
    })

  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Contactanos
            </h3>

            <form
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Nombre Completo
                    </label>
                    <input
                    required
                      placeholder="Example: John-Doe"
                      {
                        ...register("nombre")
                      }
                      className="flex grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    {
                      errors.nombre && (
                        <p className="text-red-500 text-sm">
                          {errors.nombre.message}
                        </p>
                      )
                    }
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
                      {
                        ...register("email")
                      }
                    />
                    {
                      errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )
                    }
                </div>

                <div className="mb-1 sm:mb-2">
                  <label htmlFor="phone">Numero de telefono</label>
                  <input 
                  required
                  placeholder="3156458791"
                  className="flex grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline"
                  {...register("phone")} 
                  />
                   {
                    errors.phone &&(
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )
                  }
                </div>
                
                <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Descripción
                    </label>
                    <textarea
                    required
                      placeholder="Escribe tu mensaje aquí..."
                      {...register("descripcion")}
                      className="flex grow w-full h-22 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    {
                      errors.descripcion && (
                        <p className="text-red-500 text-sm">
                          {errors.descripcion.message}
                        </p>
                      )
                    }
                </div>

                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wid transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none bg-gray-800 text-white"
                    >
                      {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}
