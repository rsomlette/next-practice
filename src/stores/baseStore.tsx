import { observable } from "mobx";
export class BaseStore<T> {
  public data = observable.map<string, T>();
  @observable
  public error: Error | null = null;
  @observable
  public isLoading: boolean = false;

  public updateDataWithKey = (key: string) => (results: T) => {
    this.data.set(key, results);
  };

  public updateDataWithValue = (key: string) => (results: T) => {
    this.data.set(results[key], results);
  };

  public updateError = (error: Error) => {
    console.info("ERROR"); // tslint:disable-line
    this.error = error;
    this.stopLoading();
  };

  public stopLoading = () => {
    console.info("LOADING"); // tslint:disable-line
    this.isLoading = false;
  };
}
