import simg1 from "../public/skills/html.png";
import simg2 from "../public/skills/text.png";
import simg3 from "../public/skills/java-script.png";
import simg4 from "../public/skills/tailwind.svg";
import simg5 from "../public/skills/reactjs.png";
import simg6 from "../public/skills/typescript-icon.svg";
import simg7 from "../public/skills/nextjs.svg";
import simg8 from "../public/skills/express.png";
import simg9 from "../public/skills/nodejs.png";
import { StaticImageData } from "next/image";
import timg1 from "../public/tools/gulp-js.svg";
import timg2 from "../public/tools/postman.svg";
import timg3 from "../public/tools/git.png";
import timg4 from "../public/tools/figma.svg";
import timg5 from "../public/tools/ajax.png";
import timg6 from "../public/tools/npm.png";
import timg7 from "../public/tools/vscode.svg";
import timg8 from "../public/tools/cli.png";

type ImageDetails = {
  img: StaticImageData;
  name: string;
};

export const skillImages: ImageDetails[] = [
  { img: simg1, name: "HTML" },
  { img: simg2, name: "CSS" },
  { img: simg3, name: "JavaScript" },
  { img: simg4, name: "Tailwind CSS" },
  { img: simg5, name: "ReactJS" },
  { img: simg6, name: "TypeScript" },
  { img: simg7, name: "NextJS" },
  { img: simg8, name: "ExpressJS" },
  { img: simg9, name: "NodeJS" },
];

export const toolsImages: ImageDetails[] = [
  { img: timg1, name: "Gulp" },
  { img: timg2, name: "Postman" },
  { img: timg3, name: "Git" },
  { img: timg4, name: "Figma" },
  { img: timg5, name: "AJAX" },
  { img: timg6, name: "NPM" },
  { img: timg7, name: "VSCode" },
  { img: timg8, name: "CLI" },
];
