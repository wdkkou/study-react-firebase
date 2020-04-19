import { firestore } from "firebase/app";

export type Publisher = {
  id?: string;
  name: string;
  nameReading: string | null;
  website: string | null;
  createAt: firestore.Timestamp | null;
  updateAt: firestore.Timestamp | null;
};
