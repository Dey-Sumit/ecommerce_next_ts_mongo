// TODO take insipiration from flipkart ❣

import { useRouter } from "next/router";

const NotFound = () => {
  const { push } = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-3xl">Page does not exist</h1>
      <button onClick={() => push("/")}>Go to home</button>
    </div>
  );
};

export default NotFound;
