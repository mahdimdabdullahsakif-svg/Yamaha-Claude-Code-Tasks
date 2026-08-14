# @yamaha/design-system

Starter Yamaha-branded design tokens and React component library.

## Structure

- `src/tokens/` — colors, typography, spacing/radii/shadows
- `src/components/` — Button, Badge, Card, Input, each built directly from the tokens

## Usage

```tsx
import { Button, Card, colors } from "@yamaha/design-system";

function Example() {
  return (
    <Card elevation="md">
      <Button variant="primary">Ride now</Button>
    </Card>
  );
}
```

## Syncing to Claude Design

From this directory, run:

```
claude
/design-sync
```

This reads the tokens and components above and pushes them into a Claude Design design-system project.
