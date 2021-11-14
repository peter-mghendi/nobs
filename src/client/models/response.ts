export interface Response<T> {
    pages: number;
    currentPage: number;
    prevPageUrl: string | null;
    nextPageUrl: string | null;
    lastUpdate: string;
    nextUpdate: string;
    data: T;
}