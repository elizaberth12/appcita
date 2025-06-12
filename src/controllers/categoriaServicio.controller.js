import CategoriaServicio from "../models/categoriaServicio.model.js";

export const crearCategoria = async (req, res) => {
  try {
    const categoria = new CategoriaServicio(req.body);
    await categoria.save();
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaServicio.find().populate("servicios");
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarCategoria = async (req, res) => {
  try {
    const categoria = await CategoriaServicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarCategoria = async (req, res) => {
  try {
    await CategoriaServicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Categoría eliminada" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
