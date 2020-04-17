import Category from './CategoryEnum';

class ItemData {
    id!: number;
    categoryID!: Category;
    title!: string;
    content!: string;
    createTime!: string;
  
    constructor(
      id: number = -1,
      // 需要对用枚举对categories进行分类
      categoryID: Category = -1,
      title: string = " ",
      content: string = ""
    ) {
      this.id = id;
      this.categoryID = categoryID;
      this.content = content;
      this.title = title;
      this.createTime = this.toSelfDateStr(Date.now());
    }
  
    toSelfDateStr(timeSpan: number): string {
      let date = new Date(timeSpan);
      let str =
        date.getFullYear() +
        "-" +
        (date.getMonth() - 1) +
        "-" +
        date.getDate() +
        "-" +
        date.getHours() +
        ":" +
        date.getMinutes();
      return str;
    }
  }
  

  export default ItemData;