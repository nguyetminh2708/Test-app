import { DEFAULT_PAGE_SIZE } from '../common/constants';

export enum SortOrder {
  ASC = 1,
  DESC = 2,
}

export enum Operation {
  EqualTo = 1,
  LessThan = 2,
  GreaterThan = 3,
  LessThanEqualTo = 4,
  GreaterThanEqualTo = 5,
  Between = 6,
  Contains = 7,
}
export interface ISortBy {
  Name: string;
  SortOrder?: SortOrder;
  Value: string;
  DBFieldName?: string;
}

export interface IFilterOptions {}
export interface IBaseResponse<T> {
  Success: boolean;
  ErrorMessages: string[];
  Value: T;
}

export interface IBaseCollectionResponse<T> {
  TotalPages: number;
  TotalRecords: number;
  Success: boolean;
  PageNumber: number;
  PageSize: number;
  SortOptions: ISortBy[];
  SortBy: ISortBy;
  ErrorMessages: string[];
  Items: T[];
}

export interface IBaseCollectionRequest {
  PageNumber: number;
  PageSize: number;
  SortBy?: ISortBy;
  FilterOptions?: IFilterOptions;
}
export class BaseCollectionRequest implements IBaseCollectionRequest {
  PageNumber: number = 0;
  PageSize: number = DEFAULT_PAGE_SIZE;
  SortBy?: ISortBy;
  FilterOptions: IFilterOptions;
}

export interface IDropdownData {
  Code?: string;
  Description: string;
  FieldDescription: string;
  ID: number;
}

export interface Buyer extends IDropdownData {}

export interface ILoadingModel {
  isLoading: boolean;
  errorMessage: string;
}

export interface IBaseRequest {
  ID?: number;
}

export interface IBaseCollectionRequest {
  PageNumber: number;
  PageSize: number;
  SortBy?: ISortBy;
  FilterOptions?: IFilterOptions;
}

export interface IBaseCollectionResponse<T> {
  TotalPages: number;
  TotalRecords: number;
  Success: boolean;
  PageNumber: number;
  PageSize: number;
  SortOptions: ISortBy[];
  SortBy: ISortBy;
  ErrorMessages: string[];
  Items: T[];
}

export interface IApiState<T> {
  data?: T;
  error?: any;
  loading?: boolean;
  refetch?: () => void;
}

export interface IOption<T> {
  value?: any;
  label?: any;
  key?: any;
  item?: T;
}

export interface ISystemSetting {
  Value: string;
  ValueString: string;
}
