export class ArrayQueue<T> {
  private maxSize: number;
  private arr: Array<T>; // 数据
  private front: number; //前端指针
  private rear: number; //后端指针

  //初始化队列
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.arr = Array(maxSize);
    this.front = -1; // 指向队列头部的前一个位置,并没有直接指向队列头
    this.rear = -1; // 指向队列尾部,指向队列尾的数据
  }
  //打印整个队列
  list() {
    if (this.isEmpty()) {
      console.log("队列为空,无数据");
      return;
    }
    this.arr.forEach((e, index) => {
      console.log(`${index} ${e}`);
    });
  }

  // 判断队列是否已经满了
  isFull() {
    return this.rear == this.maxSize - 1;
  }
  //判断队列是否为空
  isEmpty() {
    return this.front == this.rear;
  }

  //根据索引将元素打印
  print() {}
  //从队列中取出一个数
  get() {
    //判断队列是否为空
    if (this.isEmpty()) {
      throw Error("队列为空,无法取得数据");
    }
    this.front++;
    return this.arr[this.front];
  }

  /**
   * 向队列中添加一个数据
   */
  add(data: T) {
    if (this.isFull()) {
      return;
    }
    this.rear++;
    this.arr[this.rear];
    console.log("success");
  }

  //根据关键查找节点
  keySearch() {}
}
