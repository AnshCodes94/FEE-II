import { create } from "zustand";
import { toast } from "react-toastify";
import { supabase } from "./supabaseClient";

export const useStudentStore = create((set) => ({
    students: [],
    getRecords: async () => {
        try{
            const { data, error } = await supabase
            .from ("students")
            .select("*")
            .order("id" , { ascending: true});

            if(error) throw error;
            set({ students: data });
        } catch(err){
            toast.error(err.message || "Action failed...");
        }
    },

// addRecord: async (newStudent)=>{}
    deleteRecord: async (id) => {
        try{
            const { error } = await supabase.from("students").delete().eq("id",id);
            if(error) throw error;
            set((store) => ({
                students: store.students.filter((student) => student.id !==id),
            }));
            toast.success("Student removed successfully!");
        } catch(err){
            toast.error(err.message || "Action failed...");
        }
    },
})) ;