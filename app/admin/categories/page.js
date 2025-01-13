"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [editingCategory, setEditingCategory] = useState(null);

  // Kategorileri Getirme
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
    const response = await axios.get("http://localhost:4000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Kategoriler alınırken hata oluştu:", error);
    }
  };

  // Yeni Kategori Ekleme
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/categories", newCategory);
      setCategories([...categories, response.data]);
      setNewCategory({ name: "", description: "" });
    } catch (error) {
      console.error("Kategori eklenirken hata oluştu:", error);
    }
  };

  // Kategori Güncelleme
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/categories/${editingCategory._id}`,
        editingCategory
      );
      setCategories(
        categories.map((cat) =>
          cat._id === editingCategory._id ? response.data : cat
        )
      );
      setEditingCategory(null);
    } catch (error) {
      console.error("Kategori güncellenirken hata oluştu:", error);
    }
  };

  // Kategori Silme
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (error) {
      console.error("Kategori silinirken hata oluştu:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kategoriler</h1>

      {/* Yeni Kategori Formu */}
      <form
        onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory}
        className="mb-4"
      >
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Kategori Adı"
            value={
              editingCategory ? editingCategory.name : newCategory.name
            }
            onChange={(e) =>
              editingCategory
                ? setEditingCategory({
                    ...editingCategory,
                    name: e.target.value,
                  })
                : setNewCategory({ ...newCategory, name: e.target.value })
            }
            className="border p-2 rounded"
            required
          />
          <textarea
            placeholder="Kategori Açıklaması (Opsiyonel)"
            value={
              editingCategory
                ? editingCategory.description
                : newCategory.description
            }
            onChange={(e) =>
              editingCategory
                ? setEditingCategory({
                    ...editingCategory,
                    description: e.target.value,
                  })
                : setNewCategory({
                    ...newCategory,
                    description: e.target.value,
                  })
            }
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingCategory ? "Güncelle" : "Ekle"}
          </button>
        </div>
      </form>

      {/* Kategorileri Listeleme */}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Kategori Adı</th>
            <th className="border px-4 py-2">Açıklama</th>
            <th className="border px-4 py-2">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td className="border px-4 py-2">{category.name}</td>
              <td className="border px-4 py-2">{category.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => setEditingCategory(category)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDeleteCategory(category._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
