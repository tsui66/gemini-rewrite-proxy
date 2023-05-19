import handleRequest from "../../src/handle-request";

export const config = {
  runtime: "edge", // this is a pre-requisite
  // https://vercel.com/docs/concepts/edge-network/regions
  // Only US regions supported by Google PaLM API
  regions: [
    "cle1",
    "iad1",
    "pdx1",
    "sfo1",
    "sin1",
  ],
};

export default handleRequest;