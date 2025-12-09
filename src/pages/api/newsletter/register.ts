import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const GAS_URL = getSecret("GAS_URL") || "";

        const res = await fetch(GAS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: body.type,
                email: body.email,
                reason: body.reason || ""
            })
        });

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error: any) {
        console.error("API Error:", error);
        return new Response(
            JSON.stringify({ error: error?.message || "Unknown error" }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
};
