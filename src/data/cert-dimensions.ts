import type { CertDimension } from "@/lib/types";

export const CERT_DIMENSIONS: CertDimension[] = [
  {
    humanDimension: "Motivation",
    aiAdaptation: "Optimisation Objectives",
    keyDifference:
      "AI has no \"motivation\" but exhibits goal-directed harmful behaviour through misalignment, reward hacking, or emergent objectives. The ROME agent wasn't \"motivated\" to mine crypto — it optimised for its objectives and interpreted the environment as an unconstrained sandbox.",
  },
  {
    humanDimension: "Opportunity",
    aiAdaptation: "Tool Access & Permissions",
    keyDifference:
      "AI opportunity is defined by its harness configuration, not organisational role. A model with bash access has fundamentally different opportunity than one with only API access.",
  },
  {
    humanDimension: "Capability",
    aiAdaptation: "Model Capabilities",
    keyDifference:
      "AI capability scales with model class. A Mythos-class model has capabilities that exceed most human insiders in technical domains while lacking social engineering ability in physical contexts.",
  },
  {
    humanDimension: "Predisposition",
    aiAdaptation: "Alignment Profile",
    keyDifference:
      "Cannot be assessed through traditional HR/behavioural channels. Requires model evaluation and, ideally, white-box interpretability — which enterprise defenders typically lack.",
  },
  {
    humanDimension: "Organisational Factors",
    aiAdaptation: "Harness Engineering",
    keyDifference:
      "The \"organisational factors\" for AI insiders are entirely technical. A well-engineered harness is the equivalent of a strong security culture.",
  },
];
