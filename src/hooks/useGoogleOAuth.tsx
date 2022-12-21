import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';

interface GoogleCredentials {
  email: string;
  avatarUrl: string;
  name: string;
}

const useGapiClient = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: 'profile',
      });
    };

    gapi.load('client:auth2', initClient);
  }, []);
};

export default function useGoogleOAuth() {
  useGapiClient();

  const [credentials, setCredentials] = useState<GoogleCredentials | null>(null);
  console.log('>> useGoogleOAuth');

  const onSuccess = (googleUser: any) => {
    console.log('>>>> onSuccess');
    const profile = googleUser.getBasicProfile();

    setCredentials({
      email: profile.getEmail(),
      avatarUrl: profile.getImageUrl(),
      name: profile.getName(),
    });
  };

  const onError = (err: any) => {
    console.error(err);
  };

  const authenticate = () => {
    console.log('>> authenticate');
    const GoogleAuth = gapi.auth2.getAuthInstance();

    if (!GoogleAuth) {
      return;
    }

    GoogleAuth.signIn().then(
      (res: any) => onSuccess(res),
      (err: any) => onError(err),
    );
  };

  return { credentials, openAuthPrompt: authenticate };
}
