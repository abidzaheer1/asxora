export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("New lead submission:", data);

    // TODO: send to CRM/email/analytics. On Vercel this runs in a Serverless Function.
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error", error);
    return new Response("Invalid request", { status: 400 });
  }
}

