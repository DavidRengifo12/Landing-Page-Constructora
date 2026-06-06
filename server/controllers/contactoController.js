

export const sendWhatsapp = async (req, res) => {
  try {
    const { nombre, email, descripcion } = req.body;

    if (!nombre || !email || !descripcion) {
      return res.status(400).json({
        error: "Todos los campos son requeridos",
      });
    }

    const mensaje = `
    Hola, me gustaría contactarlos para solicitar más información sobre sus servicios. Aquí están mis detalles:

    Nombre: ${nombre}
    Email: ${email}
    Descripción: ${descripcion}
    `;

    const telefono = process.env.WHATSAPP_NUMBER;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    return res.status(200).json({ url });

  } catch (error) {
    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }  
};