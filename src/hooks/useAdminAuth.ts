"use client";

import { useState, useEffect } from "react";

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está autenticado ao carregar a página
    const auth = localStorage.getItem("isAdminAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const login = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}