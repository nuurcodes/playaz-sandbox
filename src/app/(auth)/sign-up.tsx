import { Pressable, Text } from "react-native";
import { supabaseClient } from "../../lib/supabase";

export default function SignUp() {
  return (
    <Pressable
      onPress={() =>
        supabaseClient.auth.signInWithPassword({
          email: "jeylani3122@gmail.com",
          password: "jeylani12345",
        })
      }
    >
      <Text>REGISTER</Text>
    </Pressable>
  );
}
