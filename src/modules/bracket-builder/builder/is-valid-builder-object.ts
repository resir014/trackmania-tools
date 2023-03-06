import { StructureBuilderV1 } from '../types/builder-types';

export function isValidBuilderObject(obj: unknown): obj is StructureBuilderV1 {
  if (typeof obj === 'object' && obj !== null) {
    const structure = obj as Partial<StructureBuilderV1>;

    if (typeof structure.version !== 'undefined' && typeof structure.rounds !== 'undefined') {
      return true;
    }

    return false;
  }

  return false;
}
