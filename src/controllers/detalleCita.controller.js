import DetalleCita from "../models/detalleCita.model.js";

export const getDetalleCitas = async (req, res) => {
  const detalles = await DetalleCita.find().populate(["horario", "empleado", "servicio", "tipo_pago"]);
  res.json(detalles);
};

export const createDetalleCita = async (req, res) => {
  const nuevo = new DetalleCita(req.body);
  const guardado = await nuevo.save();
  res.status(201).json(guardado);
};

export const updateDetalleCita = async (req, res) => {
  const actualizado = await DetalleCita.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
};

export const deleteDetalleCita = async (req, res) => {
  await DetalleCita.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
