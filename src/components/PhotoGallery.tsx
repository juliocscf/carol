"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Heart } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  caption: string;
  date?: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
}

export default function PhotoGallery({ photos = [] }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [displayPhotos, setDisplayPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Carregar fotos do localStorage
    const savedPhotos = localStorage.getItem("mariaCarolinaPhotos");
    if (savedPhotos) {
      const parsedPhotos = JSON.parse(savedPhotos);
      setDisplayPhotos(parsedPhotos.length > 0 ? parsedPhotos : getDefaultPhotos());
    } else {
      setDisplayPhotos(getDefaultPhotos());
    }
  }, [photos]);

  const getDefaultPhotos = (): Photo[] => {
    return [
      {
        id: 1,
        url: "",
        caption: "Momento de alegria",
        date: "2024"
      },
      {
        id: 2,
        url: "",
        caption: "Sorriso que ilumina",
        date: "2023"
      },
      {
        id: 3,
        url: "",
        caption: "Força e coragem",
        date: "2024"
      },
      {
        id: 4,
        url: "",
        caption: "Luz em nossas vidas",
        date: "2025"
      }
    ];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayPhotos.map((photo, index) => (
        <Dialog key={photo.id}>
          <DialogTrigger asChild>
            <Card className="overflow-hidden transition-all duration-700 hover:shadow-lg hover:scale-105 cursor-pointer group">
              <div className="aspect-square relative overflow-hidden">
                {photo.url ? (
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-12 h-12 mx-auto text-pink-400 dark:text-pink-300 mb-2" />
                      <p className="text-sm text-muted-foreground">Foto {index + 1}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-sm mb-1">{photo.caption}</h3>
                {photo.date && (
                  <p className="text-xs text-muted-foreground">{photo.date}</p>
                )}
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0">
            {photo.url ? (
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-medium mb-1">{photo.caption}</h3>
                  {photo.date && (
                    <p className="text-white/80 text-sm">{photo.date}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900">
                <div className="text-center">
                  <Heart className="w-20 h-20 mx-auto text-pink-400 dark:text-pink-300 mb-4" />
                  <p className="text-lg font-medium">{photo.caption}</p>
                  {photo.date && (
                    <p className="text-muted-foreground mt-2">{photo.date}</p>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}