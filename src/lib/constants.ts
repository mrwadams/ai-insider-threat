export const COLORS = {
  cyan: '#58a6ff',
  orange: '#f0883e',
  red: '#f85149',
  green: '#3fb950',
  purple: '#bc8cff',
  yellow: '#d29922',
} as const;

export const STRIDE_COLORS: Record<string, string> = {
  'Spoofing': COLORS.red,
  'Tampering': COLORS.orange,
  'Repudiation': COLORS.yellow,
  'Information Disclosure': COLORS.cyan,
  'Denial of Service': COLORS.purple,
  'Elevation of Privilege': COLORS.green,
} as const;

export const THREAT_LEVEL_COLORS: Record<string, string> = {
  LOW: COLORS.green,
  MEDIUM: COLORS.orange,
  HIGH: COLORS.red,
  CRITICAL: COLORS.red,
} as const;

export const NIST_COLORS: Record<string, string> = {
  Identify: COLORS.cyan,
  Protect: COLORS.green,
  Detect: COLORS.orange,
  Respond: COLORS.red,
  Recover: COLORS.purple,
} as const;
