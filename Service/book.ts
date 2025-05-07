export type Book = {
  id: string;
  title: string;
  authors: { name: string }[];
  formats: {
    [key: string]: string; // like "text/plain; charset=utf-8"
  };
};
