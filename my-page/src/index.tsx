import { PiletApi} from 'my-app';
import { MyPage } from './MyPage';
import { MyPageMenu } from './MyPageMenu';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export function setup(app: PiletApi) {
  const connect = app.createConnector(() => fetch(apiUrl).then(res => res.json()));
  app.registerMenu(MyPageMenu);
  app.registerPage('/my-page', connect(MyPage));
}
