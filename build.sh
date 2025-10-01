#!/bin/bash
echo "Installing dependencies with npm..."
npm ci

echo "Building project with npm..."
npm run build
