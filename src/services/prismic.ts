import Prismic from "@prismicio/client";

export function getPrimicClient(req?: unknown) {
    const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        req,
    });

    return prismic;
}
