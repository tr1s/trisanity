import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { projectType } from './projectType';

export const schemaTypes = [blockContentType, categoryType, postType, authorType, projectType];
