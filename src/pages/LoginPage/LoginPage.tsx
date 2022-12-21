import { useEffect } from 'react';
import useGoogleOAuth from '../../hooks/useGoogleOAuth';

const API_HOST = import.meta.env.VITE_API_HOST;

export function LoginPage() {
  const { credentials, openAuthPrompt } = useGoogleOAuth();

  useEffect(() => {
    console.log('>> LoginPage useEffect', credentials);
    if (!credentials) {
      return;
    }

    console.log('sending credentials to server...');

    fetch(`${API_HOST}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(
      async (res: any) => console.log('success:', await res.json()),
      (err: any) => console.error(err),
    );
  }, [credentials]);

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
          <button
            onClick={() => openAuthPrompt()}
            className="text-2xl text-gray-200 hover:text-gray-50 bg-gradient-to-r from-green-800 hover:from-green-600 font-bold w-full py-4 rounded-md"
          >
            Sign In with Google
          </button>
        </div>
        {credentials && (
          <div className="text-gray-200 flex flex-col">
            <span>Email: {credentials.email}</span>
            <span>Name: {credentials.name}</span>
            <span>Avatar: {credentials.avatarUrl}</span>
          </div>
        )}
      </div>
    </div>
  );
}
