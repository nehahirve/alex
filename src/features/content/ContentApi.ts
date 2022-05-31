import { Content } from "./Content";

const contentsArray: Array<Content> = [
  {
    id: "CONTENT_1",
    body: "This is a body.",
    title: "This is a title.",
  },
  {
    id: "CONTENT_2",
    body: "This is another body.",
    title: "This is another title.",
  },
];

class ContentApi {
  private contents: Array<Content>;

  constructor() {
    this.contents = contentsArray;
  }

  public get = (): Promise<Array<Content>> => {
    return Promise.resolve(this.contents);
  };

  public create = (content: Content): Promise<Content> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(content);
      }, 4000);
    });
  };

  public update = (content: Content): Promise<Content> => {
    return Promise.resolve(content);
  };

  public delete = (content: Content): Promise<Content> => {
    return Promise.resolve(content);
  };
}

export default new ContentApi();
