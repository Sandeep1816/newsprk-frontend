import { Suspense } from "react";
import PostDetailsOne from "./PostDetailsOneClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <PostDetailsOne />
    </Suspense>
  );
}
