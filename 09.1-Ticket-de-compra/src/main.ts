import {
 
  TicketFinal,
  calcularTotales,
  ResultadoLineaTicket,
  acumularPorTipoIva,
  productos,
  lineasTransformadas
  
} from "./main.helper";

const calculatTicket = (
  lineasProcesadas: ResultadoLineaTicket[],
): TicketFinal => {
  const productosTransofmados = lineasTransformadas(productos)
  const total = calcularTotales(lineasProcesadas);
  const totalporIva = acumularPorTipoIva(productos);
  return { lineas: productosTransofmados, total: total, desgloseIva: totalporIva };
};
const productosTransofrmados : ResultadoLineaTicket[] = lineasTransformadas(productos)
console.log(calculatTicket(productosTransofrmados))