import { createClient } from "@supabase/supabase-js";

function getPublicKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = getPublicKey();

  if (!url || !key) {
    throw new Error("Supabase público no configurado");
  }

  return createClient(url, key);
}
