import { type BtnType } from "../../types";

export const styles: Record<BtnType, string> = {
  number:
    "bg-white border hover:opacity-80 border-gray-300 text-black font-bold py-2 px-4 rounded m-1",
  operat:
    "bg-black hover:opacity-80 text-white font-bold py-2 px-4 rounded m-1",
  clear:
    "bg-red-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded m-1",
};
