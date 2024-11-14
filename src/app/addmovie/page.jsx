// app/addmovie/page.jsx
"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddMoviePage() {
    const [formData, setFormData] = useState({ moviename: "", image: "", genre: "" });
    const router = useRouter();

    const handleSub = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/movies", formData);
            router.push("/"); // Redirect to movie list after adding
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Add New Movie</h1>
            <form onSubmit={handleSub} className="space-y-4">
                <input
                    type="text"
                    placeholder="Movie Name"
                    value={formData.moviename}
                    onChange={(e) => setFormData({ ...formData, moviename: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
}
