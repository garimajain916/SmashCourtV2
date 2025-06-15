#!/bin/bash

echo "🎾 Setting up Smash Court..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit https://nodejs.org/ to download and install Node.js"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) is installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local from example
if [ ! -f .env.local ]; then
    echo "🔧 Creating .env.local from template..."
    cp env.example .env.local
    echo "⚠️  Please update .env.local with your database credentials"
else
    echo "✅ .env.local already exists"
fi

# Generate Prisma client
echo "🗄️  Setting up database..."
npx prisma generate

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your database credentials"
echo "2. Run 'npx prisma db push' to create the database tables"
echo "3. Run 'npm run dev' to start the development server"
echo ""
echo "Happy coding! 🎾" 