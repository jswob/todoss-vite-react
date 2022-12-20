export function LoginPage() {
  return (
    <div className="w-full h-full bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="px-8 pb-12 pt-5 text-gray-200 bg-gray-900 flex flex-col gap-8 items-center justify-center w-96 p-4 space-y-4 rounded-lg shadow-green-900 shadow-2xl">
          <h1 className="text-center text-4xl flex flex-col gap-2 font-bold mb-4">
            <span>Welcome to </span>
            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-300">
              ToDoss
            </span>
          </h1>
          <button className="text-2xl text-gray-200 hover:text-gray-50 bg-gradient-to-r from-green-800 hover:from-green-600 font-bold w-full py-4 rounded-md">
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}
