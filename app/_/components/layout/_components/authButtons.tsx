import { AUTH_PROVIDERS } from "@/app/_/constants/authProviders"
import AuthProviderButton from "./authButton"

const AuthProviderButtons = () => (
    <div className="flex-center flex-col my-4">
        {AUTH_PROVIDERS.map(provider => (
            <AuthProviderButton key={provider.name} provider={provider} />
        ))}
    </div>
)
export default AuthProviderButtons
