class DataHelper {
  datakey: string;
  primaryKey: string;

  // let dh = new DataHelper('plData', 'id');
  constructor(dataKey: string, primaryKey: string) {
    this.datakey = dataKey;
    this.primaryKey = primaryKey;
  }

  readData(): any {
    // 读取数据
    let localsavedData: string | null = localStorage.getItem(this.datakey);
    let outputData: any = [];

    if (localsavedData != null) {
      outputData = JSON.parse(localsavedData);
    }
    return outputData;
  }

  saveData(savingData: Array<Object>): void {
    // 保存数据
    let str: string = JSON.stringify(savingData);
    localStorage.setItem(this.datakey, str);
  }

  addData(conStr: any): number {
    let arr: any = this.readData();
    let obj: Object | any = {
      content: conStr
    };
    // 分配新id
    let newID: number =
      arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;

    obj[this.primaryKey] = newID;

    arr.push(obj);
    try {
      this.saveData(arr);
    } catch (e) {
      console.error(e + "save failed");
      return -1;
    }
    return newID;
  }

  deleteDataByID(id: number | string): boolean {
    let arr = this.readData();
    let index = arr.findIndex((ele: { [x: string]: string | number; }) => {
      return ele[this.primaryKey] == id;
    });
    if (index > -1) {
      arr.splice(index, 1);
      this.saveData(arr);
      return true;
    }
    return false;
  }
}

export default DataHelper;