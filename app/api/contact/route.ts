import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    companyName,
    businessType,
    channels,
    pricingInfo,
    notifyChannel,
    message,
  } = body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof companyName !== "string" ||
    typeof businessType !== "string" ||
    typeof channels !== "string" ||
    typeof pricingInfo !== "string" ||
    typeof notifyChannel !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !companyName.trim() ||
    !businessType.trim() ||
    !channels.trim() ||
    !pricingInfo.trim() ||
    !notifyChannel.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await getSupabaseAdmin().from("leadflow_contacts").insert({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    company_name: companyName.trim(),
    business_type: businessType.trim(),
    channels: channels.trim(),
    pricing_info: pricingInfo.trim(),
    notify_channel: notifyChannel.trim(),
    message: message.trim(),
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
