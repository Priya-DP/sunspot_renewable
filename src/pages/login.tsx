import { useEffect } from "react";

const AdminLoginRedirect = () => {
  useEffect(() => {
    // Redirect to Next.js Admin App on port 3000
    window.location.href = "http://localhost:3000/login";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mb-4" />
      <h2 className="text-xl font-bold mb-2">Redirecting to Sunspot Admin Portal...</h2>
      <p className="text-slate-400 text-sm mb-4">
        If you are not redirected automatically, please click the button below:
      </p>
      <a
        href="http://localhost:3000/login"
        className="px-6 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl shadow-lg hover:bg-amber-400 transition-all text-sm"
      >
        Go to Admin Login (http://localhost:3000/login)
      </a>
    </div>
  );
};

export default AdminLoginRedirect;
