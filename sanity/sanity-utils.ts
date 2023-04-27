import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: "5efaaoiz",
        dataset: "production",
        apiVersion: "2023-03-09",
    })


return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    )
}

// export async function getProjects(): Promise<Project[]> {
//     return createClient(clientConfig).fetch(
//       groq`*[_type == "project"]{
//         _id,
//         _createdAt,
//         name,
//         "slug": slug.current,
//         "image": image.asset->url,
//         url,
//         content
//       }`
//     )
//   }