import { StructureBuilderV1 } from '../types/builder-types';

export function isValidBuilderObject(obj: unknown): obj is StructureBuilderV1 {
  if (typeof obj === 'object' && obj !== null) {
    const structure = obj as Partial<StructureBuilderV1>;

    if (structure.version && structure.rounds) {
      return true;
    }

    return false;
  }

  return false;
}
