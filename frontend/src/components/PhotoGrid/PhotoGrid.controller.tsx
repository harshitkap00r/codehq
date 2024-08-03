import { useState, useEffect } from 'react';

const PhotoGridController = () => {
  const [photos, setPhotos] = useState<String[]>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);
    setIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const generateRandomInteger = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  };

  const fetchPhotos = () => {
    setPhotos([])

    for (let i = 1; i <= 18; i++) {
      setPhotos((prev) => [...prev, `https://picsum.photos/500/?random=${generateRandomInteger()}`]);
    }
  };

  return {
    photos,
  };
};

export default PhotoGridController;