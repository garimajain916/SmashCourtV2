// Pexels API utility for fetching tennis-related images
const PEXELS_API_KEY = process.env.PEXELS_API_KEY
const PEXELS_API_URL = 'https://api.pexels.com/v1'

export interface PexelsImage {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  alt: string
}

export interface PexelsResponse {
  photos: PexelsImage[]
  total_results: number
  page: number
  per_page: number
  next_page?: string
  prev_page?: string
}

export async function searchTennisImages(query: string = 'tennis', perPage: number = 10): Promise<PexelsImage[]> {
  // If no API key is provided, return fallback images immediately
  if (!PEXELS_API_KEY || PEXELS_API_KEY === 'your-pexels-api-key-here') {
    console.log('Pexels API key not configured, using fallback images')
    return getFallbackImages()
  }

  try {
    const response = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY,
        },
      }
    )

    if (!response.ok) {
      console.warn(`Pexels API error: ${response.status}, using fallback images`)
      return getFallbackImages()
    }

    const data: PexelsResponse = await response.json()
    return data.photos
  } catch (error) {
    console.warn('Error fetching images from Pexels, using fallback images:', error)
    return getFallbackImages()
  }
}

export async function getTennisCourtImages(): Promise<PexelsImage[]> {
  return searchTennisImages('tennis court', 5)
}

export async function getTennisPlayerImages(): Promise<PexelsImage[]> {
  return searchTennisImages('tennis player', 5)
}

export async function getTennisEquipmentImages(): Promise<PexelsImage[]> {
  return searchTennisImages('tennis equipment', 5)
}

// Fallback images if Pexels API is not available
function getFallbackImages(): PexelsImage[] {
  return [
    {
      id: 1,
      width: 1920,
      height: 1080,
      url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      photographer: 'Unsplash',
      photographer_url: 'https://unsplash.com',
      src: {
        original: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        large2x: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        large: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        medium: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        small: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        portrait: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        landscape: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        tiny: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      },
      alt: 'Tennis court',
    },
    {
      id: 2,
      width: 1920,
      height: 1080,
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      photographer: 'Unsplash',
      photographer_url: 'https://unsplash.com',
      src: {
        original: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        large2x: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        large: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        medium: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        small: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        portrait: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        landscape: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        tiny: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      },
      alt: 'Tennis player',
    },
  ]
} 