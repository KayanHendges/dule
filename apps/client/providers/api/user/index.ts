import { CacheConfig, api } from "@/providers/api";
import { User } from "project-common";

class UserProvider {
  getUser = async (options?: CacheConfig): Promise<User> =>
    (await api.get("user", options)).data;
}

export const userProvider = new UserProvider();
