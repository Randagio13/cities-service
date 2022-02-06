import { SortType } from './index';
export declare function dataFiltered<D, F extends keyof D>(data: D[], filters: Record<F, any>): D[];
declare type O = {
    mode: SortType;
    key?: any;
};
export declare function sorter<D, S extends O>(data: D[], options: S): D[];
export {};
//# sourceMappingURL=utils.d.ts.map