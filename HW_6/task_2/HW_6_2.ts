type First<T extends Array<unknown>> = Pick<T, 0>["0"]

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
// console.log(head1)



