import { create } from "zustand";
import { toast } from "react-toastify";
import { supabase } from "./supabaseClient";

export const useStudentStore = create((set) => ({
    students: [],
    isLoading: false,
    getRecords: async () => {
        try {
            const { data, error } = await supabase
                .from("students")
                .select("*")
                .order("id", { ascending: true });

            if (error) throw error;
            set({ students: data });
        } catch (err) {
            toast.error(err.message || "Action failed...");
        }
    },

    addRecord: async (newStudent) => {
        set({ isLoading: true });
        try {
            const { data, error } = await supabase
                .from("students")
                .insert([newStudent])
                .select();

            if (error) throw error;
            set((store) => ({
                students: [...store.students, ...data],
                isLoading: false,
            }));
            toast.success("Student added successfully!");
        } catch (err) {
            set({ isLoading: false });
            toast.error(err.message || "Action failed...");
        }
    },

    updateStudent: async (id, updatedData) => {
        set({ isLoading: true });
        try {
            const { error } = await supabase
                .from("students")
                .update(updatedData)
                .eq("id", id);

            if (error) throw error;
            set((store) => ({
                students: store.students.map((student) =>
                    String(student.id) === String(id)
                        ? { ...student, ...updatedData }
                        : student
                ),
                isLoading: false,
            }));
            toast.success("Student updated successfully!");
        } catch (err) {
            set({ isLoading: false });
            toast.error(err.message || "Action failed...");
        }
    },

    deleteRecord: async (id) => {
        try {
            const { error } = await supabase.from("students").delete().eq("id", id);
            if (error) throw error;
            set((store) => ({
                students: store.students.filter((student) => student.id !== id),
            }));
            toast.success("Student removed successfully!");
        } catch (err) {
            toast.error(err.message || "Action failed...");
        }
    },
}));