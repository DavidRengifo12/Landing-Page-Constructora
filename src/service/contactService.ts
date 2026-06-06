
import { type ContactFormData } from '../schema/contactSchema'


export const envioFormulario = async (data: ContactFormData) => {

    const response = await fetch("/api/contacto", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    if(!response.ok) {
        throw new Error("Error en la API")
    }

     return response.json()

}