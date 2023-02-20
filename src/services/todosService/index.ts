import { ITodo } from "../../types/redux-state.types";
import { HttpService } from "../http.service";
import { HttpServiceInstances } from "../";

export class TodosService {
  constructor(private httpService: HttpService) {}
  public getTodos(limit: number): Promise<ITodo[] | void> {
    return this.httpService.get(`todos?_limit=${limit}`);
  }
}

const factory = new HttpServiceInstances();
export const todosService = new TodosService(factory.createAxiosHttpService());
