import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

// vitest: extend expect with jest-dom matchers
expect.extend(matchers)
