export interface TennisCourt {
  id: string
  name: string
  address: string
  neighborhood: string
  description: string
  features: string[]
  coordinates: {
    lat: number
    lng: number
  }
  imageUrl?: string
}

export const torontoCourts: TennisCourt[] = [
  {
    id: 'central-park',
    name: 'Central Park Courts',
    address: 'Central Park, 1000 Yonge Street',
    neighborhood: 'Midtown',
    description: 'Well-maintained outdoor courts in the heart of midtown Toronto. Popular spot for local tennis enthusiasts.',
    features: ['Outdoor Courts', 'Lighting', 'Parking Available', 'Pro Shop Nearby'],
    coordinates: { lat: 43.6702, lng: -79.3867 },
  },
  {
    id: 'queens-park',
    name: "Queen's Park Tennis Courts",
    address: 'Queen\'s Park, 111 Wellesley Street West',
    neighborhood: 'Downtown',
    description: 'Historic courts located in the beautiful Queen\'s Park, perfect for a game in the city center.',
    features: ['Outdoor Courts', 'Historic Location', 'Public Transit Access', 'Scenic Views'],
    coordinates: { lat: 43.6629, lng: -79.3897 },
  },
  {
    id: 'trinity-bellwoods',
    name: 'Trinity Bellwoods Park Courts',
    address: 'Trinity Bellwoods Park, 790 Queen Street West',
    neighborhood: 'Queen West',
    description: 'Community courts in the vibrant Trinity Bellwoods neighborhood, great for casual games.',
    features: ['Outdoor Courts', 'Community Atmosphere', 'Dog Park Nearby', 'Cafes Close'],
    coordinates: { lat: 43.6471, lng: -79.4207 },
  },
  {
    id: 'high-park',
    name: 'High Park Tennis Courts',
    address: 'High Park, 1873 Bloor Street West',
    neighborhood: 'High Park',
    description: 'Multiple courts in Toronto\'s largest public park, offering a great tennis experience.',
    features: ['Multiple Courts', 'Park Setting', 'Lighting', 'Parking Available'],
    coordinates: { lat: 43.6464, lng: -79.4652 },
  },
  {
    id: 'christie-pits',
    name: 'Christie Pits Park Courts',
    address: 'Christie Pits Park, 750 Bloor Street West',
    neighborhood: 'Christie Pits',
    description: 'Popular courts in the Christie Pits neighborhood, known for friendly competition.',
    features: ['Outdoor Courts', 'Community Events', 'Public Transit Access', 'Affordable'],
    coordinates: { lat: 43.6614, lng: -79.4167 },
  },
  {
    id: 'dovercourt-park',
    name: 'Dovercourt Park Courts',
    address: 'Dovercourt Park, 100 Dovercourt Road',
    neighborhood: 'Dovercourt',
    description: 'Well-maintained courts in a family-friendly neighborhood park.',
    features: ['Outdoor Courts', 'Family Friendly', 'Playground Nearby', 'Quiet Location'],
    coordinates: { lat: 43.6589, lng: -79.4289 },
  },
  {
    id: 'stanley-park',
    name: 'Stanley Park Courts',
    address: 'Stanley Park, 1000 King Street West',
    neighborhood: 'Liberty Village',
    description: 'Modern courts in the trendy Liberty Village area, perfect for urban tennis.',
    features: ['Modern Courts', 'Urban Setting', 'Restaurants Nearby', 'Public Transit'],
    coordinates: { lat: 43.6347, lng: -79.4207 },
  },
  {
    id: 'sherbourne-common',
    name: 'Sherbourne Common Courts',
    address: 'Sherbourne Common, 61 Dockside Drive',
    neighborhood: 'Waterfront',
    description: 'Waterfront courts with stunning views of Lake Ontario and the Toronto skyline.',
    features: ['Waterfront Location', 'Scenic Views', 'Modern Facilities', 'Parking Available'],
    coordinates: { lat: 43.6401, lng: -79.3607 },
  },
  {
    id: 'regent-park',
    name: 'Regent Park Courts',
    address: 'Regent Park, 620 Dundas Street East',
    neighborhood: 'Regent Park',
    description: 'Community courts in the revitalized Regent Park neighborhood.',
    features: ['Community Courts', 'Modern Facilities', 'Public Transit', 'Affordable'],
    coordinates: { lat: 43.6614, lng: -79.3667 },
  },
  {
    id: 'corktown-common',
    name: 'Corktown Common Courts',
    address: 'Corktown Common, 1 Strachan Avenue',
    neighborhood: 'Corktown',
    description: 'New courts in the emerging Corktown neighborhood, part of the West Don Lands.',
    features: ['New Courts', 'Emerging Neighborhood', 'Modern Design', 'Park Setting'],
    coordinates: { lat: 43.6489, lng: -79.3607 },
  },
]

export function getCourtById(id: string): TennisCourt | undefined {
  return torontoCourts.find(court => court.id === id)
}

export function getCourtsByNeighborhood(neighborhood: string): TennisCourt[] {
  return torontoCourts.filter(court => 
    court.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())
  )
}

export function searchCourts(query: string): TennisCourt[] {
  const lowercaseQuery = query.toLowerCase()
  return torontoCourts.filter(court =>
    court.name.toLowerCase().includes(lowercaseQuery) ||
    court.neighborhood.toLowerCase().includes(lowercaseQuery) ||
    court.description.toLowerCase().includes(lowercaseQuery)
  )
}