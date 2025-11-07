"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface LogoutButtonProps {
  onLogout: () => void;
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onLogout}
      className="flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      Sair
    </Button>
  );
}