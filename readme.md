# @mtinner/utility-functions

A collection of TypeScript utility functions for common operations on arrays, strings, objects, and more.

## Installation

```bash
npm install @mtinner/utility-functions
```

## Features

### Array Utilities

- **`equals`** - Check if two arrays are equal
- **`isSuperSet`** - Check if first array contains all elements of second array
- **`intersection`** - Get common elements between two arrays
- **`toggleEntry`** - Add or remove an entry from an array
- **`uniqueById`** - Remove duplicates based on `id` property
- **`unique`** - Remove duplicate values
- **`moveElement`** - Move array element up or down
- **`mapByKey`** - Convert array to object mapped by specified key
- **`partition`** - Split array into two based on predicate function

### String Utilities

- **`slice`** - Slice string to maximum characters
- **`shorten`** - Truncate string and add ellipsis
- **`toSeoString`** - Convert string to SEO-friendly format

### Object Utilities

- **`typedKeys`** - Get object keys with proper typing
- **`intersectKeysToObject`** - Create object with only overlapping keys

### Other Utilities

- **`times`** - Execute function multiple times

## Usage Examples

```typescript
import { unique, intersection } from '@mtinner/utility-functions/array';
import { toSeoString } from '@mtinner/utility-functions/to-seo-string';
import { typedKeys } from '@mtinner/utility-functions/object';

// Remove duplicates
const numbers = unique([1, 2, 2, 3]); // [1, 2, 3]

// Find common elements
const common = intersection([1, 2, 3], [2, 3, 4]); // [2, 3]

// Create SEO string
const seo = toSeoString('Hello World!'); // 'hello-world'

// Get typed object keys
const obj = { name: 'John', age: 30 };
const keys = typedKeys(obj); // ('name' | 'age')[]
```

## API Reference

### Array Functions

```typescript
import { unique, intersection, toggleEntry } from '@mtinner/utility-functions/array';
```

### String Functions

```typescript
import { slice, shorten } from '@mtinner/utility-functions/string';
import { toSeoString } from '@mtinner/utility-functions/to-seo-string';
```

### Object Functions

```typescript
import { typedKeys, intersectKeysToObject } from '@mtinner/utility-functions/object';
```

### Utility Functions

```typescript
import { times } from '@mtinner/utility-functions/times';
```

## TypeScript Support

This library is written in TypeScript and includes full type definitions for better developer experience and type safety.

## License

MIT
```