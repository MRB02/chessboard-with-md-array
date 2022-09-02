// chess board: shunaqa funksiya tuzinki man unga musbat n son kiritsam  n*n olchamli shaxmat taxtasini yasab bersin.    oq joy pustoy qosin  qora joyda biron belgi bosin

const chessBoard = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        matrix[i][j] = "#$";
      } else {
        matrix[i][j] = " ";
      }
    }
  }
  console.log(matrix);
};

chessBoard(6);
