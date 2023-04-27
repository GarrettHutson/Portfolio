import { deskTool } from 'sanity/desk';
import { defineConfig } from "sanity";

export const config = defineConfig({
    projectId: "5efaaoiz",
    dataset: "production",
    title: "Portfolio",
    apiVersion: "2023-04-27",
    basePath: '/admin',
    pluggins: [deskTool]

})

