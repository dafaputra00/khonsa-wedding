import React, { useState } from "react";
import { Gift } from "lucide-react";

export default function WeddingGiftRegistry() {
  const [gifts] = useState([
    {
      id: 1,
      name: "Rice Cooker",
      note: "Minimal kapasitas 1.8L",
      brand: "Maspion",
      merk: "MRJ-1800",
      link: "https://example.com/rice-cooker",
      claimed: true,
    },
    {
      id: 2,
      name: "Blender",
      note: "Yang ada penggiling bumbu",
      brand: "Philips",
      merk: "HR2115",
      link: "https://example.com/blender",
      claimed: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-rose-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <Gift className="w-8 h-8" /> Wedding Gift Registry
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-left">
            <thead className="bg-pink-200">
              <tr>
                <th className="px-4 py-2">Nama Barang</th>
                <th className="px-4 py-2">Catatan</th>
                <th className="px-4 py-2">Merk</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Link</th>
                <th className="px-4 py-2">Checklist</th>
              </tr>
            </thead>
            <tbody>
              {gifts.map((gift) => (
                <tr
                  key={gift.id}
                  className={
                    gift.claimed
                      ? "bg-green-100 text-gray-500 line-through"
                      : "bg-white"
                  }
                >
                  <td className="border px-4 py-2">{gift.name}</td>
                  <td className="border px-4 py-2">{gift.note}</td>
                  <td className="border px-4 py-2">{gift.merk}</td>
                  <td className="border px-4 py-2">{gift.brand}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={gift.link}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Link
                    </a>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <input type="checkbox" checked={gift.claimed} readOnly />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
