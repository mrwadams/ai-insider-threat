import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Background from "@/components/sections/Background";
import CertModel from "@/components/sections/CertModel";
import ThreatTaxonomy from "@/components/sections/ThreatTaxonomy";
import DeploymentArchetypes from "@/components/sections/DeploymentArchetypes";
import DetectionStrategies from "@/components/sections/DetectionStrategies";
import ControlsFramework from "@/components/sections/ControlsFramework";
import Integration from "@/components/sections/Integration";
import Limitations from "@/components/sections/Limitations";
import StrideAppendix from "@/components/sections/StrideAppendix";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Introduction />
      <Background />
      <CertModel />
      <ThreatTaxonomy />
      <DeploymentArchetypes />
      <DetectionStrategies />
      <ControlsFramework />
      <Integration />
      <Limitations />
      <StrideAppendix />
    </div>
  );
}
