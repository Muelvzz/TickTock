export type AuthData = {
  user: string | null;
  login: (data: string) => Promise<void>;
  logout: (data: string) => void;
  isLoading: boolean
}