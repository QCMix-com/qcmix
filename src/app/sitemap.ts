import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://qcmix.com', lastModified: new Date() },
    { url: 'https://qcmix.com/services', lastModified: new Date() },
    { url: 'https://qcmix.com/industries', lastModified: new Date() },
    { url: 'https://qcmix.com/locations', lastModified: new Date() }
  ]
}
