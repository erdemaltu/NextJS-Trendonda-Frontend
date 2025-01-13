'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import API from '../../services/api';

export default function Admin() {
  const [contents, setContents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const { data } = await API.get('http://localhost:4000/api/contents');
        setContents(data);
      } catch (error) {
        console.error('İçerikler alınamadı:', error);
      }
    };

    fetchContents();
  }, []);

  const deleteContent = async (id) => {
    try {
      await API.delete(`/contents/${id}`);
      setContents(contents.filter((content) => content._id !== id));
    } catch (error) {
      console.error('İçerik silinemedi:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">İçerik Yönetimi</h1>
      <button
        onClick={() => router.push('/admin/content-form')}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        Yeni İçerik Ekle
      </button>
      <ul>
        {contents.map((content) => (
          <li key={content._id} className="mb-4">
            <h2 className="font-bold">{content.title}</h2>
            <p>{content.description}</p>
            <button
              onClick={() => router.push(`/admin/content-form?id=${content._id}`)}
              className="bg-yellow-500 text-white px-2 py-1 mr-2"
            >
              Düzenle
            </button>
            <button
              onClick={() => deleteContent(content._id)}
              className="bg-red-500 text-white px-2 py-1"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
