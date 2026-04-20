import type { Section } from "@/lib/types";

export const SECTIONS: Section[] = [
  { id: "introduction", title: "AI Agents Are the New Insider Threat", shortTitle: "Introduction", number: 1 },
  { id: "background", title: "What Mythos-Class Models Can Actually Do", shortTitle: "Background", number: 2 },
  { id: "cert-model", title: "Adapting the Insider Threat Model for Non-Human Actors", shortTitle: "CERT Model", number: 3 },
  { id: "threat-taxonomy", title: "AI Insider Threat Taxonomy", shortTitle: "Taxonomy", number: 4 },
  { id: "deployment-archetypes", title: "Autonomy Levels & Insider Threat Profiles", shortTitle: "Autonomy", number: 5 },
  { id: "detection-strategies", title: "Detection Strategies Using Existing Enterprise Tooling", shortTitle: "Detection", number: 6 },
  { id: "controls-framework", title: "Controls Framework", shortTitle: "Controls", number: 7 },
  { id: "integration", title: "Integrating AI Agents into Existing Insider Threat Programmes", shortTitle: "Integration", number: 8 },
  { id: "limitations", title: "Limitations and Future Work", shortTitle: "Limitations", number: 9 },
  { id: "stride-appendix", title: "Full STRIDE Threat Model", shortTitle: "Appendix" },
];
