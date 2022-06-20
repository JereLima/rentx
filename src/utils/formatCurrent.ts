
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatCurrent = (number: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

