export interface RequestState<R> {
  response: R | null;
  error: any;
  loading: boolean;
}
