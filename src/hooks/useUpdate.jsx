import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducto } from "../Redux/features/productos/productosSlice";
import { addDeseado } from "../Redux/features/ProductosDeseados/deseadosSlice";

export const useUpdate = () => {
  const arrProductos = useSelector((state) => state.productos);
  const arrDeseados = useSelector((state) => state.deseados);
  const [productos, setProductos] = useState(arrProductos);
  const [estadoModal, setAbrir] = useState(false);
  const [id, setId] = useState(0);
  const [deseados, setDeseados] = useState(arrDeseados);
  const dispatch = useDispatch();
  const handleSubmit = (content) => {
    dispatch(updateProducto({ index: id, content }));
  };
  const cambiarEstadoModal = (idProducto) => {
    setAbrir((prev) => !prev);
    setId(idProducto);
  };
  const handleDeseados = (idDeseado) => {
    if (idDeseado === -1) return;
    const deseado = productos.find((producto) => producto.id === idDeseado);
    if (deseado) dispatch(addDeseado(deseado));
  };
  useEffect(() => {
    setProductos(arrProductos);
  }, [arrProductos]);
  useEffect(() => {
    setDeseados(arrDeseados);
  }, [arrDeseados]);
  return {
    estadoModal,
    cambiarEstadoModal,
    handleSubmit,
    productos,
    deseados,
    handleDeseados,
  };
};
