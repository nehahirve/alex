export interface Content {
  id: string;
  body: string;
  title: string;
  nestedContent?: Array<Content>
}
