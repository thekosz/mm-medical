export interface Location {
  name: string
  region: string
  address: string
  phone: string
  hours: string
}

export const locations: Location[] = [
  { name: 'Forest Hills', region: 'Queens', address: '76-55 Austin Street, Forest Hills, NY 11375', phone: '(718) 897-2228', hours: 'Mon-Fri 9am-5pm' },
]

export const regionColors: Record<string, string> = {
  'Queens': 'text-[#1B2A4A]',
}

export const regionGradients: Record<string, string> = {
  'Queens': 'from-[#1B2A4A] to-[#C4A35A]',
}

export function getDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

export function getMapViewUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
