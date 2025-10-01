#!/bin/bash
# Force npm usage and clean any pnpm artifacts
echo "Cleaning pnpm artifacts..."
rm -rf .pnpm-store
rm -f pnpm-lock.yaml

echo "Installing with npm..."
npm ci

echo "Building with npm..."
npm run build
