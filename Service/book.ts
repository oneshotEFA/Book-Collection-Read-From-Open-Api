export type Book = {
  id: string;
  title: string;
  download_count: number;
  languages: string;
  authors: { name: string }[];
  formats: {
    [key: string]: string; // like "text/plain; charset=utf-8"
  };
};
