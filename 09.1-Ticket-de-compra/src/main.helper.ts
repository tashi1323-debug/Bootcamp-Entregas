export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

export interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
}

export interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

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

export const obtenerPorcentajeIva = (tipoIva: TipoIva) => {
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
export const lineasTransformadas = (
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

export const calcularTotales = (
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

const listadoTiposIva: TipoIva[] = [
  "general",
  "reducido",
  "superReducidoA",
  "superReducidoB",
  "superReducidoC",
  "sinIva",
];

export const acumularPorTipoIva = (
  lineasTicket: LineaTicket[],
): TotalPorTipoIva[] => {
  const listadoPorTiposIva = listadoTiposIva.map((tipoIva) => {
    const listadoProductosPorTipoIva = lineasTicket.filter(
      (elemento) => elemento.producto.tipoIva === tipoIva,
    );

    const acumuladoPorIva = listadoProductosPorTipoIva.reduce((acc, item) => {
      const iva = obtenerPorcentajeIva(item.producto.tipoIva);
      const subTotal = item.producto.precio * item.cantidad;
      const total = (subTotal * iva) / 100;
      acc += total;
      return acc;
    }, 0);
    return {
      tipoIva: tipoIva,
      cuantia: Number(acumuladoPorIva.toFixed(2)),
    };
  });
  return listadoPorTiposIva;
};
