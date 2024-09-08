export interface Response<TData = undefined> {
    message: string;
    data?: TData;
  }