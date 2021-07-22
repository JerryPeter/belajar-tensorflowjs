const a = tf.tensor1d([1,2,3,4,5]);
const b = tf.tensor1d([6,7,8,9,10]);
const d = tf.tensor([10]);

a.print()
b.print();
d.print();


console.log("----- GATHER ----");
const index = tf.tensor1d([1,2,4, 4, 4, 4, 0],'int32');
const c = tf.gather(a, index);
c.print();

console.log("----- CONCAT ----");
const c1 = tf.concat([a,b,d]);
const c2 = a.concat(b);
c1.print();
c2.print();

console.log("----- REVERSE ----");
const c3 = tf.reverse(a);
c3.print();
const e = tf.tensor2d([
                        [1,2,3,4,5],
                        [6,7,8,9,10]
                    ]);
e.print();                    
const c4 = tf.reverse(e);
c4.print();

console.log("----- TRANSPOSE ----");
const c5 = tf.transpose(e);
c5.print();

console.log("----- EQUAL ----");
const c6 = tf.equal(d,b);
c6.print();

console.log("----- GREATER ----");
const c7 = tf.greater(d,b);
c7.print();
