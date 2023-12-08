import { Pressable, SafeAreaView, Text, View } from "react-native";
import { supabaseClient } from "../../lib/supabase";

export default function SignIn() {
  return (
    <View style={{ marginTop: 100 }}>
      <Pressable
        onPress={() =>
          supabaseClient.auth.signInWithPassword({
            email: "jeylani312@gmail.com",
            password: "jeylani1234",
          })
        }
      >
        <Text>LOGIN</Text>
      </Pressable>
    </View>
  );
}
