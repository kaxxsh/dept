export const BASE_URL =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cheerful-phoenix-f5d34f.netlify.app";
