export interface Comparator<T> {
    compare(first: T, second: T): number;
}
