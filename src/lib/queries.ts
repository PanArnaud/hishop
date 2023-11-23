import {
  DocumentData,
  FieldPath,
  OrderByDirection,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

// Snapshots
const getSnapshots = <T>(
  collectionName: string,
  setter: React.Dispatch<React.SetStateAction<T[]>>,
  whereFilter?: {
    property: string | FieldPath;
    value: string | number | boolean | null | undefined;
  },
  orderByFilter?: { property: string; direction: OrderByDirection }
): void => {
  let q = query(collection(db, collectionName));
  if (whereFilter) {
    q = query(q, where(whereFilter.property, "==", whereFilter.value));
  }
  if (orderByFilter) {
    q = query(q, orderBy(orderByFilter.property, orderByFilter.direction));
  }
  onSnapshot(q, (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
    setter(
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as T;
      })
    );
  });
};

const getSnapshot = <T>(
  collectionName: string,
  id: string | undefined,
  setter: React.Dispatch<React.SetStateAction<T>>
): void => {
  if (id !== undefined) {
    onSnapshot(doc(db, collectionName, id), (doc) => {
      setter({ id: doc.id, ...doc.data() } as T);
    });
  }
};

// Documents
const getDocuments = async <T>(
  collectionName: string,
  setter: React.Dispatch<React.SetStateAction<T[]>>,
  whereFilter?: {
    property: string | FieldPath;
    value: string | number | boolean | null | undefined;
  },
  orderByFilter?: { property: string; direction: OrderByDirection }
): Promise<void> => {
  let q = query(collection(db, collectionName));
  if (whereFilter) {
    q = query(q, where(whereFilter.property, "==", whereFilter.value));
  }
  if (orderByFilter) {
    q = query(q, orderBy(orderByFilter.property, orderByFilter.direction));
  }
  const querySnapshot = await getDocs(q);
  setter(
    querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      } as T;
    })
  );
};

const getDocument = async <T>(
  collectionName: string,
  id: string | undefined,
  setter: React.Dispatch<React.SetStateAction<T>>
): Promise<void> => {
  if (id !== undefined) {
    const document = await getDoc(doc(db, collectionName, id));
    if (document.data() !== undefined) {
      setter({ id: document.id, ...document.data() } as T);
    }
  }
};

export { getDocument, getDocuments, getSnapshot, getSnapshots };
