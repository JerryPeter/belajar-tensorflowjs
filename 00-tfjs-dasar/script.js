console.log("----- SCALAR -----");
tf.scalar(3.14).print();

console.log("----- TENSOR 1D -----");
const tensor1d = tf.tensor1d([10, 23, 34], 'int32');

tf.print(tensor1d);
tensor1d.print();
// console.log(tensor1d);

console.log("----- TENSOR 2D -----");
tf.tensor2d([[1, 2], [3, 4]]).print();
tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [4, 2]).print();

console.log("----- TENSOR 3D -----");
tf.tensor3d([1, 2, 3, 4], [1, 2, 2]).print();
tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]).print();
//tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16], [2, 4, 2]).print();
tf.tensor3d([
    [
      [1,2],
      [3,4],
      [5,6],
      [7,8]
    ],
    [
      [9,10],
      [11,12],
      [13,14],
      [15,16]
    ]
   ]).print();

console.log("----- TENSOR 3D -----");
tf.tensor4d([1, 2, 3, 4,5,6,7,8], [2, 2, 2, 1]).print();

console.log("----- TENSOR -----");
tf.tensor([10, 23, 34]).print();
tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [4, 2]).print();
tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]).print();
tf.tensor([1, 2, 3, 4,5,6,7,8], [2, 2, 2, 1]).print();