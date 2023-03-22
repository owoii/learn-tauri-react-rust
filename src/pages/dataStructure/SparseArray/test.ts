import SparseArray from "./SparseArray";
//在命令行界面测试是否可用
function Test() {
  // 创建一个原始的二维数组 11*11
  let chessArr1: number[][] = SparseArray.createArray({ row: 11, col: 11 });
  // 设置棋子(赋值)
  chessArr1[1][2] = 1;
  chessArr1[2][3] = 2;
  chessArr1[3][3] = 2;

  SparseArray.printArray({ array: chessArr1, msg: "原始数据" });

  //将原始数组转为稀疏数组
  const sparseArr = SparseArray.toSparseArray({
    array: chessArr1,
    def: 0,
  });

  // 打印转换后的稀疏数组
  SparseArray.printArray({ array: sparseArr, msg: "稀疏数组" });

  const parseArr = SparseArray.parseSapraseArray({
    array: sparseArr,
  });

  SparseArray.printArray({ array: parseArr, msg: "还原后的数据" });
}

Test();
