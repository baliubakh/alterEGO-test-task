import { INews } from "../../types/redux-state.types";
import { HttpService } from "../http.service";
import { HttpServiceInstances } from "../";

export class NewsService {
  constructor(private httpService: HttpService) {}
  public getNews(limit: number): Promise<INews[] | void> {
    return this.httpService.get(`photos?_limit=${limit}`);
  }
}

const factory = new HttpServiceInstances();
export const newsService = new NewsService(factory.createAxiosHttpService());
