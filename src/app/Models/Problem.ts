import {IAuthor} from "./Author";
import {IExample} from "./Example";
export interface IProblem{
  id: number,
  title: string,
  question: string,
  author: IAuthor,
  createdTime: Date,
  rank: number,
  difficulty: number,
  time: number,
  memory: number,
  inputData: string,
  outputData: string,
  tags: string[],
  status: number | null,
  examples: IExample []
}
