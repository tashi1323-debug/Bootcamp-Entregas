export type TipoIva =
  | "general"
  | "reducido"
  | "superReducidoA"
  | "superReducidoB"
  | "superReducidoC"
  | "sinIva";

export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superReducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superReducidoA",
    },
    cantidad: 1,
  },
];

/* La función calculaTicket devolverá un ticket que contendrá la siguiente información:

Por cada producto queremos el nombre, la cantidad, el precio sin IVA, el tipo de IVA y el precio con IVA. */
const obtenerPorcentajeIva = (tipoIva: TipoIva) => {
  switch (tipoIva) {
    case "general":
      return 0.21;
    case "reducido":
      return 0.1;
    case "superReducidoA":
      return 0.05;
    case "superReducidoB":
      return 0.04;
    case "superReducidoC":
    case "sinIva":
      return 0;

    default:
      return 0;
  }
};
const lineasTransformadas = (
  productos: LineaTicket[],
): ResultadoLineaTicket[] => {
  return productos.map((item) => {
    const precioBase = item.producto.precio * item.cantidad;
    const tipoIva = obtenerPorcentajeIva(item.producto.tipoIva);
    const iva = precioBase * tipoIva;
    const precioConIva = precioBase + iva;

    return {
      nombre: item.producto.nombre,
      cantidad: item.cantidad,
      precioSinIva: precioBase,
      tipoIva: item.producto.tipoIva,
      precioConIva: precioConIva,
    };
  });
};

const lineasProcesadas = lineasTransformadas(productos);

const calcularTotales = (
  lineasProcesadas: ResultadoLineaTicket[],
): ResultadoTotalTicket => {
  const totales = lineasProcesadas.reduce(
    (acc, item) => {
      const totalSinIva = item.precioSinIva;
      const totalIva = item.precioConIva - item.precioSinIva;
      const totalConIva = item.precioConIva;

      acc.totalSinIva += totalSinIva;
      acc.totalIva += totalIva;
      acc.totalConIva += totalConIva;

      return acc;
    },
    { totalSinIva: 0, totalIva: 0, totalConIva: 0 },
  );
  return {
    totalSinIva: Number(totales.totalSinIva.toFixed(2)),
    totalIva: Number(totales.totalIva.toFixed(2)),
    totalConIva: Number(totales.totalConIva.toFixed(2)),
  };
};

const acumularPorTipoIva = (
  lineasTicket: ResultadoLineaTicket[],
): TotalPorTipoIva[] => {
  const resultado = lineasTicket.reduce(
    (acc, item) => {
      const tipoIva = item.tipoIva;
      if (!acc[tipoIva]) {
        acc[tipoIva] = 0;
      }
      acc[tipoIva] += item.precioConIva - item.precioSinIva;
      return acc;
    },
    {} as Record<string, number>,
  );

};
console.log(acumularPorTipoIva(lineasProcesadas));

/* En cuanto a los totales:
El total sin IVA.
El IVA.
Un desglose del total por tipo de IVA, es decir, la suma de los importes correspondientes a cada tipo de IVA.
El total del ticket, incluyendo el IVA.
Para esto tendremos las siguientes interfaces:*/
export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
}

interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

/*Pistas:

Para calcular el IVA de un producto, se multiplica el precio del producto por el porcentaje de IVA y se divide entre 100.

Por ejemplo, si el precio del producto es 10 y el IVA es el 21%, el IVA será 2,1.

Para redondear un número a dos decimales, se puede utilizar el método toFixed de JavaScript.

Si necesitas crear funciones auxiliares, se recomienda crearlas. Así, la función principal será más sencilla de leer.*/
