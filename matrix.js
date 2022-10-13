class Matrix {
  constructor(rows, cols, elements) {
    this.rows = rows;
    this.cols = cols;
    const newElements = [];

    if (elements.length > rows * cols)
      console.log("Mais elementos do que posicoes");
    else while (elements.length) newElements.push(elements.splice(0, cols));
    this.elements = newElements;
  }

  get(i, j) {
    return console.log(this.elements[i][j]);
  }
  set(i, j, value) {
    console.log(`Valor mudado de ${this.elements[i][j]} para ${value}`);
    this.elements[i][j] = value;
  }
}

module.exports = {
  Matrix,
};
