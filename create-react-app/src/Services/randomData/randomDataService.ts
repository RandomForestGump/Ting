import { DataProvider } from '../../Common/utilities/DataProvider';

export default class randomDataServicde {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async getRandomData(data:any) {
    return this.dataProvider.GetData('api/users/changepassword')
  }
}

