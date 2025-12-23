import { buildMetadata } from './metadata'

export const routeMeta = {
  home: buildMetadata({
    title: 'QCMix | Fast Local Websites for Quad Cities Businesses',
    description: 'Performance-first websites built for SEO, AI search, and conversions.',
    url: 'https://qcmix.com',
    image: '/og-home.png'
  }),
  services: buildMetadata({
    title: 'QCMix Services | Web Design, Hosting, Visibility',
    description: 'Web design, managed hosting, and local SEO for Quad Cities businesses.',
    url: 'https://qcmix.com/services',
    image: '/og-services.png'
  })
}
