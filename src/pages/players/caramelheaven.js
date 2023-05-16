import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CaramelHeaven = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/./errors/nonexistent');
  }, []);

  return null;
}

export default CaramelHeaven;
