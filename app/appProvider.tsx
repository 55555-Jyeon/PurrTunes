import { SearchModalProvider } from "./_libs/searchModalProvider"
import { AppProviderProps } from "./type"

const AppProvider = ({ children }: AppProviderProps) => {
    return <SearchModalProvider>{children}</SearchModalProvider>
}
export default AppProvider
