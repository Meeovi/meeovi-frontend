
export function useAuth() {
  const auth = useSupabaseAuth();
  const user = computed(() => auth.user.value);

  return { user };
}
