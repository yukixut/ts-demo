import { useLocalStore } from "mobx-react-lite";

const store: any = () => {
  const test_store = useLocalStore(() => ({
    num: 1,
    test: "22",
  }));
  return test_store;
};

export default new store();
