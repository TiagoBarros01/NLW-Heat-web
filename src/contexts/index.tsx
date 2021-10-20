import { AuthProvider } from "./auth"

export const ContextProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}