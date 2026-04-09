// import codequestImage from "./codequest-placeholder.svg";
import platematesImage from "./platemates-placeholder.svg";
import chatapplikationImage from "./chatapplikation-placeholder.svg";
import taskManagerImage from "./task-manager-placeholder.svg";
import bloggplattformImage from "./bloggplattform-placeholder.svg";
import vaederappImage from "./vaederapp-placeholder.svg";
import codequestImage from "./codequest1.png";
import codequestImage2 from "./codequest2.png";

const projectImagesBySlug: Record<string, string[]> = {
    codequest: [codequestImage, codequestImage2],
    platemates: [platematesImage],
    chatapplikation: [chatapplikationImage],
    "task-manager": [taskManagerImage],
    bloggplattform: [bloggplattformImage],
    vaederapp: [vaederappImage],
};

export const getProjectImagesBySlug = (slug: string): string[] => projectImagesBySlug[slug] ?? [];
