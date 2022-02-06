export interface City {
    id: number;
    name: string;
    state_id: number;
    state_code: string;
    country_id: number;
    country_code: string;
    latitude: string;
    longitude: string;
}
declare type Cities = City[];
declare type Args = {
    filters?: {
        country_code?: never;
        state_code?: never;
    } | {
        country_code: string | string[];
        state_code?: string;
    };
    sort?: {
        mode: 'asc';
        key?: never;
    } | {
        mode: 'desc';
        key?: never;
    } | {
        mode: 'alphabetical';
        key: 'name';
    };
};
export declare function getCities(args?: Args): Cities;
declare const _default: {
    getCities: typeof getCities;
};
export default _default;
//# sourceMappingURL=cities.d.ts.map