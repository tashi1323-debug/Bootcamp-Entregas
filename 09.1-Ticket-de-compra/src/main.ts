import {
 
  TicketFinal,
  calcularTotales,
  ResultadoLineaTicket,
  acumularPorTipoIva,
  productos,
  lineasTransformadas,
  LineaTicket
  
} from "./main.helper";

const calculatTicket = (
  productos:LineaTicket[],
): TicketFinal => {
  const productosTransofmados = lineasTransformadas(productos)
  const total = calcularTotales(productosTransofmados);
  const totalporIva = acumularPorTipoIva(productos);
  return { lineas: productosTransofmados, total: total, desgloseIva: totalporIva };
};
console.log(calculatTicket(productos))