class LinearAlgebra {
  sum(a, b) {
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length; j++) {
        a[i][j] = a[i][j] + b[i][j];
      }
    }
  }

  dot(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
      result[i] = [];
      for (var j = 0; j < b[0].length; j++) {
        var sum = 0;
        for (var k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  det(a) { 
    var al = new LinearAlgebra();
    if (a.length == 1) {
      return a[0][0];
    }
    if (a.length == 2) {
      return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }
    var answer = 0;
    for (var i = 0; i < a.length; i++) {
      answer += Math.pow(-1, i) * a[0][i] * al.det(al.deleteRC(a, i));
    }
    return answer;
  }

  deleteRC(a, index) {
    var temp = [];
    for (var i = 0; i < a.length; i++) {
      temp.push(a[i].slice(0));
    }

    temp.splice(0, 1);
    for (var i = 0; i < temp.length; i++) {
      temp[i].splice(index, 1);
    }
    return temp;
  }

  inverse(a) {
    var al = new LinearAlgebra();

    if (al.det(a.elements) == 0) {
      console.log("Determinante = 0");
      return "";
    }

    var temp,
      N = a.rows,
      E = [],
      auxZ = [],
      auxY = [];
    var aux = a.elements;

    for (var i = 0; i < N; i++) {
      // constroi a matriz indentidade
      E[i] = [];
    }

    for (i = 0; i < N; i++) {
      // preenche a matriz indentidade
      for (var j = 0; j < N; j++) {
        E[i][j] = 0;
        if (i == j) E[i][j] = 1;
      }
    }

    for (let x = 0; x < N; x++) {
      if (aux[0][0] == 0) {
        if (aux[x][0] != 0) {
          for (let z = 0; z < N; z++) {
            auxZ.push(aux[0][z]);
            aux[0][z] = aux[x][z];

            auxY.push(E[0][z]); //identidade
            E[0][z] = E[x][z];
          }
          for (let z = 0; z < N; z++) {
            aux[x][z] = auxZ[z];
            E[x][z] = auxY[z];
          }
        }
      }
    }

    for (var k = 0; k < N; k++) {
      temp = aux[k][k];
      for (var j = 0; j < N; j++) {
        aux[k][j] /= temp;
        E[k][j] /= temp;
      }

      for (var i = k + 1; i < N; i++) {
        temp = aux[i][k];

        for (var j = 0; j < N; j++) {
          aux[i][j] -= aux[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }

    for (var k = N - 1; k > 0; k--) {
      for (var i = k - 1; i >= 0; i--) {
        temp = aux[i][k];

        for (var j = 0; j < N; j++) {
          aux[i][j] -= aux[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }

    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        aux[i][j] = E[i][j];
      }
    }

    for (let l = 0; l < N; l++) {
      for (let h = 0; h < N; h++) {
        aux[l][h] = parseFloat(aux[l][h].toFixed(2));
      }
    }

    return aux;
  }

  baseChange(m1, m2) {
    //B-1 * A
    var al = new LinearAlgebra();
    let detO = al.det(m1.elements);
    let detT = al.det(m2.elements);
    if (detO == 0 || detT == 0) {
      console.log(detO + " " + detT);
      return "Alguma(s) das bases inseridas são inválida";
    }

    if (m1.rows != m2.rows || m1.cols != m2.cols) {
      return "Bases de tamanhos diferentes";
    }

    let aux = al.inverse(m2);
    let result = al.dot(aux, m1.elements);

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length; j++) {
        result[i][j] = parseFloat(result[i][j].toFixed(2));
      }
    }

    return result;
  }
}

module.exports = {
  LinearAlgebra,
};
