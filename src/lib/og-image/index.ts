import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";

const loadFont = async (path: string) => {
    const font = await fs.readFile(path);
    return font;
};

const createSvgFromTitleAndDescription = async (title: string, description: string) => {
    const TimesNewRomanFont = await loadFont("./src/assets/fonts/tnr.ttf");

    const svg = await satori(
        {
            type: "div",
            props: {
                children: [
                    {
                        type: "h1",
                        props: {
                            children: title,
                            style: {
                                fontSize: 48,
                                color: "#333333",
                            },
                        },
                    },
                    {
                        type: "p",
                        props: {
                            children: description,
                            style: {
                                fontSize: 24,
                                color: "#333333",
                            },
                        },
                    },
                ],
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 1200,
                    height: 630,
                    backgroundColor: "white",
                    fontFamily: "Times New Roman",
                    borderLeft: "16px solid #333333",
                },
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Times New Roman",
                    data: TimesNewRomanFont,
                    weight: 400,
                    style: "normal",
                },
            ],
        }
    );

    return svg;
};

const createPngFromSvg = async (svg: string) => {
    const png = await sharp(Buffer.from(svg)).png().toBuffer();
    return png;
};

export { createSvgFromTitleAndDescription, createPngFromSvg };
