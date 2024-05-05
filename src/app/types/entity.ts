export interface Entity {
  id: number;
}

export interface AuditedEntity extends Entity {
  lastModificationTime: string;
  lastModifierUserId: number;
  creationTime: string;
  creatorUserId: number;
}
