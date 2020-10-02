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
      // 将时间戳转换为日期对象
      let date = new Date(timeSpan);
      // 使用日期对象的 get方法依次获取年月日时分秒 拼接成想要的格式
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
        // 返回日期字符串
      return str;
    }
  }
  

  export default ItemData;