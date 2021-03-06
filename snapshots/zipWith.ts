import R_zipWith = require('../ramda/dist/src/zipWith');

declare const number_string_to_object: (x: number, y: string) => object;
declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> (b: string[] | ArrayLike<string>) => object[]
R_zipWith(number_string_to_object, number_array);
// @dts-jest:pass:snap -> object[]
R_zipWith(number_string_to_object)(number_array)(string_array);
// @dts-jest:pass:snap -> object[]
R_zipWith(number_string_to_object, number_array, string_array);
