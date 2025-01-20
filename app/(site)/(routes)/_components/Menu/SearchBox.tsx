"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setIsSearchOpen(false); 
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div className="relative">
      <Search
        onClick={toggleSearch}
        className="cursor-pointer"
      />

      {isSearchOpen && (
        <div className="absolute top-8 right-0 w-72 p-4 bg-white dark:bg-black shadow-lg rounded-lg z-50">
          <div className="relative">
            <Input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Ara..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="link"
              className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
