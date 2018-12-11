export interface IEntry<T> {
  total: number;
  skip: number;
  limit: number;
  items: IField<T>[];
}

interface IField<T> {
  fields: T;
}
