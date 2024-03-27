import type { APIRoute } from "astro";
import type { string } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_APY_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  console.log({ to, from, html, subject, text });
  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    )
  }

  return new Response(
    JSON.stringify({
      message: send.error,
    }),
    {
      status: 500,
      statusText: "Internal Server Error",
    }
  )
};
