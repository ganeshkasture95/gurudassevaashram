"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fdfbf7",
          color: "#17140f",
          fontFamily: "system-ui, sans-serif",
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#6b645c", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            The site hit an unexpected error. Please try refreshing the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#ea5a06",
              color: "#fff",
              border: "none",
              borderRadius: "9999px",
              padding: "0.875rem 2rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
