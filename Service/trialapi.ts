import { useEffect, useState } from "react";
import { Book } from "./book";

export const useBookFetcher = () => {
  const [value, setValue] = useState<Book[]>([]);
  const [load, setload] = useState(false);
  const [error, setError] = useState("");

  const fetchBook = async () => {
    try {
      setload(true);
      const response = await fetch(
        "https://gutendex.com/books/?sort=downloads"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const bookData = await response.json();
      setValue(bookData.results); // only setting the actual list of books
    } catch (err) {
      setError("error");
      console.log("Error fetching book:", err);
    } finally {
      setload(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return { value, error, load, fetchBook, setError };
};
