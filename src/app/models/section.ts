export interface Section {
  title: string;
  content: { children: { text: string }[] }[];
}
