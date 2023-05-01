const climb = {
    name: "climb",
    title: "Climb",
    type: "document",
    fields: [
    
      {
        name: "cragName",
        title: "Crag Name",
        type: "string",
      },
      {
        name: "wall",
        title: "Wall",
        type: "string"
      },

        {
            name: "routeName",
            title: "Route Name",
            type: "string",
          },

        {
          name: "rating",
          title: "Rating",
          type: "string",
        },
        {
          name: "grade",
          title: "Grade",
          type: "string"
        },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "routeName" }
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string"
              }
            ]
          },
          {
            name: "url",
            title: "URL",
            type: "url"
          },
          {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }]
          },
          //add location, grade and type
       
     
          {
            name: "type",
            title: "Type",
            type: "array",
            of: [{ type: "block" }]
          },
            ]
          }
   
      export default climb;