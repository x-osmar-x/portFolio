import type { APIRoute } from "astro";
import { string } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_APY_KEY);
export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const to  = body.to ;
    const from  = body.from ;
    const html  = body.html ;
    const subject  = body.subject ;
    const text  = body.text ;

    console.log({ to, from, html, subject, text } );
    const { data, error } = await resend.emails.send({
      to,
      from,
      html,
      subject,
      text,
    });
    if (!error) {
      return new Response(
        JSON.stringify({
          message: data,
        }),
        {
          status: 200,
        }
      );
    }
  }
  return new Response(null, { status: 400 });
};
/* export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  console.log({ to, from, html, subject, text });
  const { data, error }  = await resend.emails.send({
    to: 'o1b9c9h3@gmail.com',
    from: 'chris@learnastro.dev',
    html: '<p>Hi</p>',
    subject: 'Prueba',
    text: 'dsadasdasdasd'
  });
  if (error) {
    return console.error({ error });
  }
  return console.log("ok");
}; */

/* (async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})(); */
/* export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  console.log({ to, from, html, subject, text });
  const send = await resend.emails.send({
    to: 'o1b9c9h3@gmail.com',
    from: 'chris@learnastro.dev',
    html: '<p>Hi</p>',
    subject: 'Prueba',
    text: 'dsadasdasdasd'
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
 */
