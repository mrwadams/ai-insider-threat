export interface Section {
  id: string;
  title: string;
  shortTitle: string;
  number?: number;
}

export interface StatItem {
  value: string;
  label: string;
  color: 'cyan' | 'orange' | 'green' | 'red' | 'purple';
}

export interface CapabilityRow {
  capability: string;
  metric: string;
  riskImplication: string;
}

export interface CertDimension {
  humanDimension: string;
  aiAdaptation: string;
  keyDifference: string;
}

export interface ThreatCategory {
  id: string;
  name: string;
  archetype: string;
  aiManifestation: string;
  strideMapping: string;
  color: string;
}

export interface DeploymentArchetype {
  id: string;
  name: string;
  level: string;
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  humanRole: string;
  typicalAccess: string;
  detectionModel: string;
  primaryThreats: string;
  keyControl: string;
  description: string;
}

export interface DetectionTechnique {
  category: string;
  items: {
    monitor: string;
    detectionLogic: string;
    mapsToThreat: string;
  }[];
}

export interface NistControl {
  function: 'Identify' | 'Protect' | 'Detect' | 'Respond' | 'Recover';
  controls: string[];
}

export interface StrideThreat {
  id: string;
  category: 'Spoofing' | 'Tampering' | 'Repudiation' | 'Information Disclosure' | 'Denial of Service' | 'Elevation of Privilege';
  scenario: string;
  impact: string;
  frequency: 'high' | 'low';
  complexity: 'high' | 'low';
}

export interface HumanVsAiRow {
  characteristic: string;
  humanInsider: string;
  aiInsider: string;
}

export interface Source {
  id: number;
  author: string;
  title: string;
  date: string;
  url?: string;
}

export interface ItpComponent {
  component: string;
  humanInsider: string;
  aiAdaptation: string;
}
