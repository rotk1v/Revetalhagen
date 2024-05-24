export interface Event {
  title: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  content: EventContent[];
  markDefinitions: EventContentMarkDef[];
}

export interface EventContent {
  style: string;
  type: string;
  text: EventContentText[];
}

export interface EventContentText {
  type: string;
  value: string;
  marks: string[];
}

export interface EventContentMarkDef {
  markId: string;
  type: string;
  target: string;
}
