import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Yubs = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/./errors/nonexistent');
  }, []);

  return null;
}

export default Yubs;