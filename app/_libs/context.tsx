import { createContext } from "react"
import { SearchModalContextType } from "./type"

export const SearchModalContext = createContext<SearchModalContextType | undefined>(undefined)
