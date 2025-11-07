"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Image as ImageIcon, GripVertical, Edit, Trash2, X, Upload } from "lucide-react";
import PhotoReorderControls from "@/components/PhotoReorderControls";
import ImageUpload from "@/components/ImageUpload";

interface Photo {
  id: number;
  url: string;
  caption: string;
  date?: string;
}

interface PhotoManagerProps {
  photos: Photo[];
  onPhotosChange: (photos: Photo[]) => void;
}

export default function PhotoManager({ photos, onPhotosChange }: PhotoManagerProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  const [newPhoto, setNewPhoto] = useState({
    url: "",
    caption: "",
    date: ""
  });

  const resetForm = () => {
    setNewPhoto({ url: "", caption: "", date: "" });
    setEditingPhoto(null);
    setShowAddForm(false);
  };

  const handleImageUpload = (imageUrl: string) => {
    setNewPhoto({ ...newPhoto, url: imageUrl });
  };

  const handleAddPhoto = () => {
    if (newPhoto.url && newPhoto.caption) {
      const photo: Photo = {
        id: Date.now(),
        url: newPhoto.url,
        caption: newPhoto.caption,
        date: newPhoto.date || undefined
      };
      
      onPhotosChange([...photos, photo]);
      resetForm();
    }
  };

  const handleEditPhoto = (photo: Photo) => {
    setEditingPhoto(photo);
    setNewPhoto({
      url: photo.url,
      caption: photo.caption,
      date: photo.date || ""
    });
    setShowAddForm(true);
  };

  const handleUpdatePhoto = () => {
    if (editingPhoto && newPhoto.url && newPhoto.caption) {
      const updatedPhotos = photos.map(photo =>
        photo.id === editingPhoto.id
          ? { ...photo, url: newPhoto.url, caption: newPhoto.caption, date: newPhoto.date || undefined }
          : photo
      );
      
      onPhotosChange(updatedPhotos);
      resetForm();
    }
  };

  const handleRemovePhoto = (id: number) => {
    onPhotosChange(photos.filter(photo => photo.id !== id));
  };

  const handleMovePhoto = (currentIndex: number, direction: 'up' | 'down' | 'left' | 'right') => {
    const newPhotos = [...photos];
    let newIndex = currentIndex;

    switch (direction) {
      case 'up':
        newIndex = currentIndex - 3;
        break;
      case 'down':
        newIndex = currentIndex + 3;
        break;
      case 'left':
        newIndex = currentIndex - 1;
        break;
      case 'right':
        newIndex = currentIndex + 1;
        break;
    }

    if (newIndex >= 0 && newIndex < newPhotos.length) {
      [newPhotos[currentIndex], newPhotos[newIndex]] = [newPhotos[newIndex], newPhotos[currentIndex]];
      onPhotosChange(newPhotos);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Gerenciar Fotos</h3>
        <Button 
          size="sm" 
          onClick={() => setShowAddForm(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Foto
        </Button>
      </div>

      {/* Formulário Flutuante */}
      {showAddForm && (
        <Card className="border-2 border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">
              {editingPhoto ? 'Editar Foto' : 'Adicionar Nova Foto'}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetForm}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="url" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  URL
                </TabsTrigger>
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="url" className="space-y-4">
                <div>
                  <Label htmlFor="url">URL da Imagem</Label>
                  <Input
                    id="url"
                    value={newPhoto.url}
                    onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="upload" className="space-y-4">
                <ImageUpload onImageUpload={handleImageUpload} />
                {newPhoto.url && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Imagem carregada com sucesso! Preencha os dados abaixo para finalizar.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            <div>
              <Label htmlFor="caption">Legenda</Label>
              <Textarea
                id="caption"
                value={newPhoto.caption}
                onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                placeholder="Uma breve descrição da foto..."
              />
            </div>
            
            <div>
              <Label htmlFor="date">Data (opcional)</Label>
              <Input
                id="date"
                value={newPhoto.date}
                onChange={(e) => setNewPhoto({ ...newPhoto, date: e.target.value })}
                placeholder="2024"
              />
            </div>
            
            <Button 
              onClick={editingPhoto ? handleUpdatePhoto : handleAddPhoto} 
              className="w-full" 
              disabled={!newPhoto.url || !newPhoto.caption}
            >
              {editingPhoto ? 'Atualizar Foto' : 'Adicionar Foto'}
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <Card key={photo.id} className="overflow-hidden group">
            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                {photo.url ? (
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleEditPhoto(photo)}
                    className="w-8 h-8 p-0"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemovePhoto(photo.id)}
                    className="w-8 h-8 p-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="text-xs">
                    #{index + 1}
                  </Badge>
                </div>
                
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PhotoReorderControls
                    currentIndex={index}
                    totalItems={photos.length}
                    onMove={(direction) => handleMovePhoto(index, direction)}
                    gridCols={3}
                  />
                </div>
              </div>
              
              <CardContent className="p-4">
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{photo.caption}</h4>
                {photo.date && (
                  <p className="text-xs text-muted-foreground mb-2">{photo.date}</p>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GripVertical className="w-3 h-3" />
                    <span>Arraste para reordenar</span>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditPhoto(photo)}
                      className="w-6 h-6 p-0"
                    >
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemovePhoto(photo.id)}
                      className="w-6 h-6 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}