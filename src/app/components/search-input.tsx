'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Search } from "lucide-react";


export default function SearchInput() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching... ${term}`)
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500)

    return (
        <div className="w-full max-w-sm mt-10 gap-3 flex flex-col">
        <Label htmlFor="searchInput"> Pesquisar</Label>
        <div className="flex items-center gap-2">
            <Input 
                id="searchInput" 
                type="text" 
                placeholder="Pesquisar por..." 
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <Button type="submit"> <Search className="w-3 h-3"/> </Button>
        </div>
      </div>
    )
}