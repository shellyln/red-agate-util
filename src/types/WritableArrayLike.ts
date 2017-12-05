

export interface WritableArrayLike<T> {
    readonly length: number;
    [n: number]: T;
}
