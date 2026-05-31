import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- Metrics Helpers (LeetCode Count, Sheryians Progress) ---

export async function getMetric(key: string, defaultValue: number): Promise<number> {
  try {
    const { data, error } = await supabase
      .from("dashboard_metrics")
      .select("value")
      .eq("key", key)
      .single();

    if (error || !data) {
      return defaultValue;
    }
    return data.value;
  } catch {
    return defaultValue;
  }
}

export async function setMetric(key: string, value: number): Promise<void> {
  try {
    await supabase
      .from("dashboard_metrics")
      .upsert({ key, value, updated_at: new Date().toISOString() });
  } catch (err) {
    console.error(`Error saving metric ${key}:`, err);
  }
}

// --- Daily Habits Helpers ---

export async function getDailyHabits(date: string): Promise<boolean[] | null> {
  try {
    const { data, error } = await supabase
      .from("daily_habits")
      .select("checked_state")
      .eq("date", date)
      .single();

    if (error || !data) {
      return null;
    }
    return data.checked_state as boolean[];
  } catch {
    return null;
  }
}

export async function setDailyHabits(date: string, checkedState: boolean[]): Promise<void> {
  try {
    await supabase
      .from("daily_habits")
      .upsert({ date, checked_state: checkedState, updated_at: new Date().toISOString() });
  } catch (err) {
    console.error(`Error saving daily habits for ${date}:`, err);
  }
}

// --- Weekly Streaks Helpers ---

export async function getWeeklyStreak(weekKey: string): Promise<string[] | null> {
  try {
    const { data, error } = await supabase
      .from("weekly_streaks")
      .select("states")
      .eq("week_key", weekKey)
      .single();

    if (error || !data) {
      return null;
    }
    return data.states as string[];
  } catch {
    return null;
  }
}

export async function setWeeklyStreak(weekKey: string, states: string[]): Promise<void> {
  try {
    await supabase
      .from("weekly_streaks")
      .upsert({ week_key: weekKey, states, updated_at: new Date().toISOString() });
  } catch (err) {
    console.error(`Error saving weekly streak ${weekKey}:`, err);
  }
}

// --- Contact Form Backup Helper ---

export async function saveContactSubmission(
  name: string,
  email: string,
  message: string
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, message }]);
    return !error;
  } catch {
    return false;
  }
}
