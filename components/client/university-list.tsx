import { universityData } from "@/consts";
import { Plus } from 'lucide-react';
import Link from "next/link";
import DownloadApplication from "./download-button";

export default function UniversityList() {
  const columnCount = 3;

  const columnsData = universityData.reduce<typeof universityData[]>((acc, uni, index) => {
    const columnIndex = index % columnCount;
    if (!acc[columnIndex]) {
      acc[columnIndex] = [];
    }
    acc[columnIndex].push(uni);
    return acc;
  }, []);

  return (
    <div id="Universities" className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Find a University</h1>
      <div className="h-1 w-24 bg-orange-500 mb-12 mx-auto" />
      <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-3 gap-x-20 gap-y-4 mb-12">
        {columnsData.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-4">
            {column.map((university) => (
              <Link
                key={university.slug}
                href={`/universities/${university.slug}`}
                className="flex items-start gap-2 text-gray-700 hover:text-orange-500 transition-colors group"
              >
                <Plus className="w-5 h-5 min-w-[1.25rem] text-orange-500 mt-1"/>
                <span className="text-lg">{university.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <DownloadApplication />
      </div>
    </div>
  )
}

