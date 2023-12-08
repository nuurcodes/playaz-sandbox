export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  app: {
    Tables: {
      activity_types: {
        Row: {
          activity_name: string;
          activity_type_id: number;
          is_enabled: boolean;
        };
        Insert: {
          activity_name: string;
          activity_type_id: number;
          is_enabled?: boolean;
        };
        Update: {
          activity_name?: string;
          activity_type_id?: number;
          is_enabled?: boolean;
        };
        Relationships: [];
      };
      conversation: {
        Row: {
          conversation_id: string;
          subject: string;
        };
        Insert: {
          conversation_id?: string;
          subject: string;
        };
        Update: {
          conversation_id?: string;
          subject?: string;
        };
        Relationships: [];
      };
      event: {
        Row: {
          creator_user_id: string;
          event_id: string;
          event_price: number | null;
          event_start_date_time: string | null;
          group_id: string | null;
          is_active: boolean;
          location: Json;
          number_of_teams: number | null;
          repeat_frequency: string;
          status: string;
          team_size: number | null;
          timestamp: string;
        };
        Insert: {
          creator_user_id: string;
          event_id?: string;
          event_price?: number | null;
          event_start_date_time?: string | null;
          group_id?: string | null;
          is_active?: boolean;
          location?: Json;
          number_of_teams?: number | null;
          repeat_frequency?: string;
          status?: string;
          team_size?: number | null;
          timestamp?: string;
        };
        Update: {
          creator_user_id?: string;
          event_id?: string;
          event_price?: number | null;
          event_start_date_time?: string | null;
          group_id?: string | null;
          is_active?: boolean;
          location?: Json;
          number_of_teams?: number | null;
          repeat_frequency?: string;
          status?: string;
          team_size?: number | null;
          timestamp?: string;
        };
        Relationships: [
          {
            foreignKeyName: "event_group_id_fkey";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "group";
            referencedColumns: ["group_id"];
          },
          {
            foreignKeyName: "fk_app_event_creator";
            columns: ["creator_user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      event_participant: {
        Row: {
          attendance: string;
          event_id: string;
          event_participant_id: string;
          gotm_votes: number;
          group_id: string;
          has_voted_gotm: boolean;
          has_voted_motm: boolean;
          motm_votes: number;
          paid: boolean;
          user_id: string;
        };
        Insert: {
          attendance: string;
          event_id: string;
          event_participant_id?: string;
          gotm_votes?: number;
          group_id: string;
          has_voted_gotm?: boolean;
          has_voted_motm?: boolean;
          motm_votes?: number;
          paid: boolean;
          user_id: string;
        };
        Update: {
          attendance?: string;
          event_id?: string;
          event_participant_id?: string;
          gotm_votes?: number;
          group_id?: string;
          has_voted_gotm?: boolean;
          has_voted_motm?: boolean;
          motm_votes?: number;
          paid?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_app_event_participant_event";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["event_id"];
          },
          {
            foreignKeyName: "fk_app_event_participant_group";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "group";
            referencedColumns: ["group_id"];
          },
          {
            foreignKeyName: "fk_app_event_participant_user";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      event_team_participants: {
        Row: {
          event_id: string;
          event_team_id: number;
          event_user_id: string;
          user_id: string;
        };
        Insert: {
          event_id: string;
          event_team_id: number;
          event_user_id: string;
          user_id: string;
        };
        Update: {
          event_id?: string;
          event_team_id?: number;
          event_user_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "event_team_participants_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["event_id"];
          },
          {
            foreignKeyName: "event_team_participants_event_team_id_fkey";
            columns: ["event_team_id"];
            isOneToOne: false;
            referencedRelation: "event_teams";
            referencedColumns: ["event_team_id"];
          },
          {
            foreignKeyName: "event_team_participants_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      event_teams: {
        Row: {
          event_id: string;
          event_team_id: number;
        };
        Insert: {
          event_id: string;
          event_team_id?: number;
        };
        Update: {
          event_id?: string;
          event_team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "event_teams_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["event_id"];
          }
        ];
      };
      gender: {
        Row: {
          gender_name: string;
          gender_type_id: number;
        };
        Insert: {
          gender_name: string;
          gender_type_id: number;
        };
        Update: {
          gender_name?: string;
          gender_type_id?: number;
        };
        Relationships: [];
      };
      group: {
        Row: {
          avatar_url: string | null;
          conversation_id: string | null;
          creator_user_id: string;
          general_invite_id: string;
          group_id: string;
          group_name: string;
          is_active: boolean;
          is_auto_join: boolean;
        };
        Insert: {
          avatar_url?: string | null;
          conversation_id?: string | null;
          creator_user_id: string;
          general_invite_id?: string;
          group_id?: string;
          group_name: string;
          is_active?: boolean;
          is_auto_join?: boolean;
        };
        Update: {
          avatar_url?: string | null;
          conversation_id?: string | null;
          creator_user_id?: string;
          general_invite_id?: string;
          group_id?: string;
          group_name?: string;
          is_active?: boolean;
          is_auto_join?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "fk_app_group_conversation_conversation_id";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "conversation";
            referencedColumns: ["conversation_id"];
          },
          {
            foreignKeyName: "fk_app_group_creator";
            columns: ["creator_user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      group_participant: {
        Row: {
          group_id: string;
          id: string;
          is_admin: boolean;
          user_id: string;
        };
        Insert: {
          group_id: string;
          id?: string;
          is_admin?: boolean;
          user_id: string;
        };
        Update: {
          group_id?: string;
          id?: string;
          is_admin?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_app_app_participant_group";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "group";
            referencedColumns: ["group_id"];
          },
          {
            foreignKeyName: "fk_app_app_participant_user";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      message: {
        Row: {
          author_user_id: string;
          conversation_id: string;
          event_id: string | null;
          is_interactive: boolean;
          message: string;
          message_id: number;
          timestamp: string;
        };
        Insert: {
          author_user_id: string;
          conversation_id: string;
          event_id?: string | null;
          is_interactive?: boolean;
          message: string;
          message_id?: never;
          timestamp?: string;
        };
        Update: {
          author_user_id?: string;
          conversation_id?: string;
          event_id?: string | null;
          is_interactive?: boolean;
          message?: string;
          message_id?: never;
          timestamp?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_app_event_team_event";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "event";
            referencedColumns: ["event_id"];
          },
          {
            foreignKeyName: "message_author_user_id_fkey";
            columns: ["author_user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          },
          {
            foreignKeyName: "message_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "conversation";
            referencedColumns: ["conversation_id"];
          }
        ];
      };
      sent_notification_status: {
        Row: {
          created_at: string;
          expo_notification_id: string;
          processed: boolean;
          status: string;
        };
        Insert: {
          created_at?: string;
          expo_notification_id: string;
          processed?: boolean;
          status: string;
        };
        Update: {
          created_at?: string;
          expo_notification_id?: string;
          processed?: boolean;
          status?: string;
        };
        Relationships: [];
      };
      user: {
        Row: {
          address_code: string | null;
          avatar_url: string | null;
          email: string;
          expo_push_token: string | null;
          full_name: string | null;
          gender_id: number | null;
          is_active: boolean;
          phone_number: string | null;
          push_notification_setting: string | null;
          user_id: string;
        };
        Insert: {
          address_code?: string | null;
          avatar_url?: string | null;
          email: string;
          expo_push_token?: string | null;
          full_name?: string | null;
          gender_id?: number | null;
          is_active?: boolean;
          phone_number?: string | null;
          push_notification_setting?: string | null;
          user_id: string;
        };
        Update: {
          address_code?: string | null;
          avatar_url?: string | null;
          email?: string;
          expo_push_token?: string | null;
          full_name?: string | null;
          gender_id?: number | null;
          is_active?: boolean;
          phone_number?: string | null;
          push_notification_setting?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_app_user_auth_users";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      user_profile: {
        Row: {
          activity_type_id: number;
          is_active: boolean;
          user_id: string;
          user_profile_id: string;
        };
        Insert: {
          activity_type_id: number;
          is_active?: boolean;
          user_id: string;
          user_profile_id: string;
        };
        Update: {
          activity_type_id?: number;
          is_active?: boolean;
          user_id?: string;
          user_profile_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_app_user_profile_activity_type";
            columns: ["activity_type_id"];
            isOneToOne: false;
            referencedRelation: "activity_types";
            referencedColumns: ["activity_type_id"];
          },
          {
            foreignKeyName: "fk_app_user_profile_user";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      handle_vote_increment: {
        Args: {
          voter_user_id: string;
          voted_user_id: string;
          group_id: string;
          event_id: string;
          increment_column_name: string;
          boolean_column_name: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
