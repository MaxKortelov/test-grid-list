export interface IPaginator {
  page: number;
  pages: number;
  handleChangePage: (it: number) => void;
}
