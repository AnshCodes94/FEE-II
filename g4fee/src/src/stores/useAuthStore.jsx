import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist((set, get) => ({
        isLoggedIn: false,
        userName: "",
        login: (name) => set({ isLoggedIn: true, userName: name }),
        logout: () => set({ isLoggedIn: false, userName: "" }),
    }))
);