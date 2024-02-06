type CamelSeparator = "-" | "_" | ".";

/**
 * Converts a string to camel case.
 */
export type CamelCase<S extends string> =
  S extends `${infer FirstWord}${CamelSeparator}${infer SecondChar}${infer Remaining}`
    ? `${Lowercase<FirstWord>}${Uppercase<SecondChar>}${CamelCase<Remaining>}`
    : Lowercase<S>;

export type Camelize<T> = {
  [K in keyof T as CamelCase<string & K>]: T[K] extends {}
    ? Camelize<T[K]>
    : T[K];
};
