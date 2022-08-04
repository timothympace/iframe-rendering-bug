import { useEffect, useState } from "react";

export default function IframePage() {
  const [hasAppRenderedOrHydrated, setHasAppRenderedOrHydrated] = useState(false);

  useEffect(() => {
    setHasAppRenderedOrHydrated(true);
  }, [])

  return (
    <>
      {hasAppRenderedOrHydrated && (
        <div>If you attempt to load this page in a hidden iframe, this div will NOT be
          rendered in development mode due to hydration waiting for beforeRender to
          finish. See: https://github.com/vercel/next.js/blob/0f99768f9811fdf027a083471bd2a435f6207f4a/packages/next/client/index.tsx#L436.
        </div>
      )}
    </>
  )
}
