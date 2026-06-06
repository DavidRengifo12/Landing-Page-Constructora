import{z} from 'zod'


export const contactSchema = z.object({
    nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(20,"El nombre es demasiado largo"),

    phone: z.string().trim().regex( /^3\d{9}$/,"El teléfono solo debe contener números").length(10, "Ingrese un numero de celular de 10 digitos"),

    email: z.string().trim().email("Ingrese un correo electrónico válido"),

    descripcion: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").trim(),
})

export type ContactFormData = z.infer<typeof contactSchema>