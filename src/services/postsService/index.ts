import { IPost } from "../../types/redux-state.types";
import { HttpService } from "../http.service";
import { HttpServiceInstances } from "../";

export class PostsService {
  constructor(private httpService: HttpService) {}
  public getPosts(limit: number): Promise<IPost[] | void> {
    return this.httpService.get(`posts?_limit=${limit}`);
  }
}

const factory = new HttpServiceInstances();
export const postsService = new PostsService(factory.createAxiosHttpService());
