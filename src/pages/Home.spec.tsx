import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './index'

test('Home', () => {
  render(<Home />)

  expect(screen.getByText('Entrar com Github')).toBeDefined()
})
