"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PhotoManager from "@/components/PhotoManager";
import LogoutButton from "@/components/LogoutButton";
import { Heart, Settings, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Photo {
  id: number;
  url: string;
  caption: string;
  date?: string;
}

export default function AdminDashboard() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/admin");
      return;
    }
    
    // Carregar fotos do localStorage
    const savedPhotos = localStorage.getItem("mariaCarolinaPhotos");
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    }
    
    setIsLoading(false);
  }, [router]);

  const handlePhotosChange = (newPhotos: Photo[]) => {
    setPhotos(newPhotos);
    // Salvar no localStorage para persistência
    localStorage.setItem("mariaCarolinaPhotos", JSON.stringify(newPhotos));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto text-pink-500 animate-pulse mb-4" />
          <p className="text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-pink-500 mr-3" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Painel Administrativo
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" passHref>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver Site
                </Button>
              </Link>
              <LogoutButton onLogout={handleLogout} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Gerenciar Fotos</h2>
          <p className="text-muted-foreground">
            Adicione, edite ou remova fotos da galeria da Maria Carolina
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Gerenciador de Fotos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PhotoManager photos={photos} onPhotosChange={handlePhotosChange} />
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total de Fotos</p>
                  <p className="text-2xl font-bold">{photos.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Settings className="w-6 h-6 text-purple-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <p className="text-2xl font-bold text-green-600">Ativo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <ArrowLeft className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Acesso</p>
                  <p className="text-2xl font-bold">Restrito</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}