export const url =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "https://portfolio-backend-bnv8.onrender.com"
    : "http://localhost:4000";