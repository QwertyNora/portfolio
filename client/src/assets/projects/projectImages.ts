// import codequestImage from "./codequest-placeholder.svg";
import platematesImage from "./platemates-placeholder.svg";
import chatapplikationImage from "./chatapplikation-placeholder.svg";
import taskManagerImage from "./task-manager-placeholder.svg";
import bloggplattformImage from "./bloggplattform-placeholder.svg";
import vaederappImage from "./vaederapp-placeholder.svg";
import codequestImage from "./codequest1.png";
import codequestImage2 from "./codequest2.png";
import codequestImage3 from "./codequest3.png";
import codequestImage4 from "./codequest4.png";
import codequestImage5 from "./codequest5.png";

const projectImagesBySlug: Record<string, string[]> = {
    codequest: [codequestImage, codequestImage2, codequestImage3, codequestImage4, codequestImage5],
    platemates: [platematesImage],
    chatapplikation: [chatapplikationImage],
    "task-manager": [taskManagerImage],
    bloggplattform: [bloggplattformImage],
    vaederapp: [vaederappImage],
};

export const getProjectImagesBySlug = (slug: string): string[] => projectImagesBySlug[slug] ?? [];
