import { create } from 'zustand';
import { toast } from 'react-toastify';
import { supabase } from './supabaseClient';

export const useStudentStore = create((set) => ({
    students: [],

    getRecords: async () => {
        try {
            const { data, error } = await supabase
            .from('students')
            .select('*')
            .order('id', { ascending: true });

            if (error) {
                throw error;
            }

            set({ students: data });
        } catch (err) {
            toast.error(err.message || 'Action failed...');
        }
    },

    deleteRecord: async (id) => {
        try {
            const { error } = await supabase
            .from('students')
            .delete()
            .eq('id', id);

            if (error) {
                throw error;
            }
            // Remove the deleted record from the local state
            set((state) => ({
                students: state.students.filter((student) => student.id !== id)
            }));
            toast.success('Record deleted successfully');
        } catch (err) {
            toast.error(err.message || 'Action failed...');
        }
    }
}));