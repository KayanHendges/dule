export type OrderBy = 'asc' | 'desc';

type OrderParam<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Array<any> ? undefined : OrderBy;
};


export type EntityCommonOmit = "id" | "createdAt" | "updatedAt";

export type EntityAuditCommonOmit = EntityCommonOmit | "createdBy" | "lastUpdatedBy";

export interface ResponseList<T> {
  list: T[];
  count: number;
  page: number;
  pageSize: number;
}
