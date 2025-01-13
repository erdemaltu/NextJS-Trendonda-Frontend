'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import API from '../../services/api';

export default function ContentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [form, setForm] = useState({ title: '', description: '', category: '' });

  useEffect(() => {
    if (id) {
      const fetchContent = async () => {
        try {
          const { data } = await API.get(`/contents/${id}`);
          if (data) {
            setForm(data);
          } else {
            console.error('Content not found');
          }
        } catch (error) {
          console.error('İçerik alınamadı:', error);
        }
      };

      fetchContent();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await API.put(`/contents/${id}`, form);
      } else {
        await API.post('/contents', form);
      }
      router.push('/admin/contents');
    } catch (error) {
      if (!error.response) {
        console.error('Network error:', error);
      } else {
        console.error('İşlem başarısız:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'İçerik Düzenle' : 'Yeni İçerik Ekle'}</h1>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Başlık"
        className="block mb-2 p-2 border"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Açıklama"
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Kategori"
        className="block mb-2 p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Kaydet
      </button>
    </form>
  );
}
