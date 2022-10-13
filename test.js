const { Matrix } = require('./matrix')
const { LinearAlgebra } = require('./linearAlgebra')

var m = new Matrix(1, 1, [5])

var myMatrix1 = new Matrix(2, 2, [1, 2, 
                                  3, 9 
                         ])

var myMatrix2 = new Matrix(2, 2, [0, 1, 
                                  5, 2]
                          );
                                
var myMatrix3 = new Matrix(3, 3, [1, -1, 2, 
                                  1, 2, -2,
                                  3,  1, 0]
                          );

var myMatrix4 = new Matrix(4, 4, [1, -1, 2, 3, 
                                  1, 2, -2, 5,
                                  3,  1, 0, 8,
                                  4,  2, 5, 2]
                          );

var transpor = new LinearAlgebra();

//console.log(transpor.det(m.elements))
//console.log(transpor.inverse(myMatrix4))
//console.log(transpor.baseChange(myMatrix1, myMatrix2))
