

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "date",
      title: "Date",
      type: "date"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: { source: "name" }
            },
            {
              name: "alt",
              title: "Alt",
              type: "string"
            }
          ]
        }
      ]
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default project;
