import React from "react";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { LocaleData } from "../types";

export function LocaleSwitcher({ localeData }: { localeData: LocaleData }) {
  if (!localeData.en_url || !localeData.es_url) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href={localeData.en_url}>English</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={localeData.es_url}>Español</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}