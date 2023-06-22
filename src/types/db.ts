export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clinics: {
        Row: {
          active: boolean
          address: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          owner_id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          address?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          owner_id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          address?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          owner_id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinics_owner_id_fkey"
            columns: ["owner_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      medicalrecords: {
        Row: {
          created_at: string
          diagnosis: string | null
          id: string
          medication: string | null
          notes: string | null
          pet_id: string
          published: boolean
          treatment: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          diagnosis?: string | null
          id?: string
          medication?: string | null
          notes?: string | null
          pet_id: string
          published?: boolean
          treatment?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          diagnosis?: string | null
          id?: string
          medication?: string | null
          notes?: string | null
          pet_id?: string
          published?: boolean
          treatment?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "medicalrecords_pet_id_fkey"
            columns: ["pet_id"]
            referencedRelation: "pets"
            referencedColumns: ["id"]
          }
        ]
      }
      pets: {
        Row: {
          birth_date: string | null
          breed: string | null
          created_at: string
          gender: string | null
          id: string
          name: string
          owner_id: string
          status: string
          type: string | null
          updated_at: string
        }
        Insert: {
          birth_date?: string | null
          breed?: string | null
          created_at?: string
          gender?: string | null
          id?: string
          name: string
          owner_id: string
          status: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          birth_date?: string | null
          breed?: string | null
          created_at?: string
          gender?: string | null
          id?: string
          name?: string
          owner_id?: string
          status?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pets_owner_id_fkey"
            columns: ["owner_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          author_id: string
          content: Json | null
          created_at: string
          id: string
          published: boolean
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content?: Json | null
          created_at?: string
          id?: string
          published?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: Json | null
          created_at?: string
          id?: string
          published?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          email_verified: string | null
          id: string
          image: string | null
          name: string | null
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          email_verified?: string | null
          id: string
          image?: string | null
          name?: string | null
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          email_verified?: string | null
          id?: string
          image?: string | null
          name?: string | null
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
