import { ContactStore } from '@/types'
import { apiClient } from '../lib/api'
import { create } from 'zustand'

export const useContactStore = create<ContactStore>((set, get) => ({
  contacts: [],
  loading: false,
  error: null,

  fetchContacts: async () => {
    try {
      set({ loading: true })
      const { data } = await apiClient.get(`/contacts`)
      console.log('Fetched contacts:', data.data )
      set({ contacts: data.data, loading: false })
    } catch (err: any) {
      set({ error: err.message, loading: false })
    }
  },

  addContact: async (contact) => {
    try {
      set({ loading: true })
      const { data } = await apiClient.post('/contacts', contact)
      set({ contacts: [...get().contacts, data], loading: false })
    } catch (err: any) {
      set({ error: err.message, loading: false })
    }
  },

  markVerified: async (id) => {
    try {
      await apiClient.put(`/contacts/${id}`, { verified: true })
      set({
        contacts: get().contacts.map(c =>
          c.id === id ? { ...c, verified: true } : c
        ),
      })
    } catch (err: any) {
      set({ error: err.message })
    }
  },

  deleteContact: async (id) => {
    try {
      await apiClient.delete(`/contacts/${id}`)
      set({
        contacts: get().contacts.filter(c => c.id !== id),
      })
    } catch (err: any) {
      set({ error: err.message })
    }
  },
}))
