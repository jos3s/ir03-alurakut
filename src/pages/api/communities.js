import { SiteClient } from "datocms-client";

export default async function receiveRequest(request, response) {
  if (request.method === "POST") {
    const client = new SiteClient(process.env.DATO_FULL_ACESS_TOKEN);

    const register = await client.items.create({
      itemType: "967707",
      ...request.body,
    });

    response.json({
      status: "success",
      register,
    });
    return;
  }
}
