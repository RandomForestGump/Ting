import { DataProvider } from '../../Common/utilities/DataProvider';

export default class randomDataServicde {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async getRandomData(data:any) {
    // console.log(data,"<---- data")
    // console.log(JSON.stringify(data),"<----x")
    // debugger
    data = JSON.stringify(data)
    console.log(data,"<----y")
    return this.dataProvider.GetData(`api/search/vision/?query_term=${data}`)
  }

  public async getPoiData(data:any) {
    // console.log(data,"<---- data")
    // console.log(JSON.stringify(data),"<----x")
    // debugger
    return this.dataProvider.PostData(`api/filter/poi/`,data)
  }

}

