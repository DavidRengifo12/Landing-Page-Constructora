
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  try{
  const { nombre, email,phone, descripcion } = req.body;

  if (!nombre || !email || !descripcion) {
    return res.status(400).json({
      error: "Todos los campos son requeridos",
    });
  }

  const mensaje = `
  Hola, me gustaría contactarlos para solicitar más información sobre sus servicios. Aquí están mis detalles:
  Nombre: ${nombre}
  Telefono: ${phone}
  Email: ${email}
  Descripción: ${descripcion}
  `;

  const telefono = process.env.WHATSAPP_NUMBER;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return res.status(200).json({ url });
}catch(error){
  return res.status(500).json({
    error:"Ocurro¿io un error interno en el servidor"
  })
}
}