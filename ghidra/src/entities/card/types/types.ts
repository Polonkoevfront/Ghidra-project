export type Product = {
  id: string;
  title: string;
  imageUrl: string;
  desc: string;
  desc2: string;
  desc3: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface sliceState {
  items: Product[];
  status: Status;
}
