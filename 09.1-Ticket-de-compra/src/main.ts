import {
 
  TicketFinal,
  calcularTotales,
  ResultadoLineaTicket,
  acumularPorTipoIva,
  lineasProcesadas,
  
} from "./main.helper";

const calculatTicket = (
  lineasProcesadas: ResultadoLineaTicket[],
): TicketFinal => {
  const total = calcularTotales(lineasProcesadas);
  const totalporIva = acumularPorTipoIva(lineasProcesadas);
  return { lineas: lineasProcesadas, total: total, desgloseIva: totalporIva };
};

console.log(calculatTicket(lineasProcesadas))