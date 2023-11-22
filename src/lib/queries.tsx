import {
  CollectionReference,
  DocumentData,
  FieldPath,
  OrderByDirection,
  QuerySnapshot,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

// Snapshots
const getSnapshots = <T,>(
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

const getSnapshot = <T,>(
  collectionName: string,
  id: string | undefined,
  setter: React.Dispatch<React.SetStateAction<T>>
) => {
  if (id !== undefined) {
    onSnapshot(doc(db, collectionName, id), (doc) => {
      setter({ id: doc.id, ...doc.data() } as T);
    });
  }
};

// Documents
const getDocuments = async <T,>(
  collectionName: string,
  setter: React.Dispatch<React.SetStateAction<T[]>>,
  whereFilter?: {
    property: string | FieldPath;
    value: string | number | boolean | null | undefined;
  },
  orderByFilter?: { property: string; direction: OrderByDirection }
) => {
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

export { getSnapshots, getSnapshot, getDocuments };
