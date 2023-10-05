// 稀疏数组
export class SparseArray {
  /**
   * 根据行和列的大小创建一个二维数组
   * @param row 行
   * @param col 列
   * @param def 数组的默认值
   */
  static createArray({
    row,
    col,
    def,
  }: {
    row: number;
    col: number;
    def?: number;
  }) {
    if (!def) {
      def = 0;
    }
    const arr: number[][] = new Array(row); //创建行
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(col).fill(def);
    }

    return arr;
  }

  /**
   * 将二维数组打印到屏幕上
   * @param array 需要打印的数组
   * @param msg 需要展示的信息
   */
  static printArray({ array, msg }: { array: number[][]; msg?: string }) {
    if (msg) {
      console.log(`----------${msg}-------------`);
    } else {
      console.log("----------Array Data------------");
    }

    array.forEach((e, index) => console.log(`${index}\t[ ${e.join(" ")} ]`));
    console.log("---------------------------------");
  }

  /**
   * 将一个二维数组转为稀疏数组
   * @param array 原始数组
   * @param def 原始数组的默认值
   * @returns
   */
  static toSparseArray({ array, def }: { array: number[][]; def: number }) {
    // 遍历数组,得到非 默认值 的数据个数
    let sum = 0;
    array.forEach((arr) => {
      arr.forEach((item) => {
        if (item != def) {
          sum++;
        }
      });
    });

    //根据 sum 创建稀疏数组,这里要使用 sum + 1来创建,因为第一行要用来存储数组信息
    const sparseArray = SparseArray.createArray({
      row: sum + 1,
      col: 3,
      def: def,
    });
    // 记录原始数组的数据
    sparseArray[0][0] = array.length; //记录原始数组有多少行
    sparseArray[0][1] = array[0].length; //记录原始数组有多少列
    sparseArray[0][2] = sum; //记录原始数组有多少个 非默认值 的数据

    //再次对原数组进行遍历,将 非默认值 的数据添加到稀疏数组中
    // 准备一个计数器,用来记录当前为稀疏数组的多少行
    let count = 0;
    array.forEach((arr, row) => {
      arr.forEach((item, col) => {
        if (item != def) {
          count++;
          sparseArray[count][0] = row;
          sparseArray[count][1] = col;
          sparseArray[count][2] = item;
        }
      });
    });

    return sparseArray;
  }


  /**
   * 将一个稀疏数组还原为原始数据
   * @param array 稀疏数组
   * @param def 还原后要填充的数据的默认值
   * @returns 
   */
  static parseSapraseArray({
    array,
    def,
  }: {
    array: number[][];
    def?: number;
  }) {
    // 从稀疏数组的第一行中提取数组数据
    const [row, col, sum] = array[0];

    // 根据稀疏数组的信息创建空数组
    const parseArr = SparseArray.createArray({
      row,
      col,
      def,
    });

    // 通过遍历,将稀疏数组的数据复制到空的原始数组内
    //这里的 i 要从 索引 1 开始,因为索引 0 的位置存放的是信息,而不是数据
    for (let i = 1; i < sum; i++) {
      const item = array[i];
      parseArr[item[0]][item[1]] = item[2];
    }

    return parseArr;
  }
}

export default SparseArray;
