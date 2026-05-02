export const getCategoryName = (category) => {
  if (!category) return ''
  return typeof category === 'string' ? category : category.name ?? ''
}

export const getPrimaryImage = (item) => {
  return item?.media?.find((media) => media.type === 'image')?.url
    ?? item?.media?.find((media) => media.thumbnail)?.thumbnail
    ?? item?.image
    ?? item?.thumbnail
    ?? item?.avatar
    ?? ''
}

export const getPrimaryVideo = (item) => {
  return item?.media?.find((media) => media.type === 'video' && media.url)
    ?? null
}

export const getImages = (item) => {
  const mediaImages = item?.media
    ?.filter((media) => media.type === 'image' && media.url)
    .map((media) => media.url)

  if (mediaImages?.length) return mediaImages
  if (item?.images?.length) return item.images
  return item?.image ? [item.image] : []
}

const UZ_MONTHS = [
  'Yanvar',
  'Fevral',
  'Mart',
  'Aprel',
  'May',
  'Iyun',
  'Iyul',
  'Avgust',
  'Sentabr',
  'Oktabr',
  'Noyabr',
  'Dekabr',
]

export const formatDate = (value) => {
  if (!value) return ''

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return `${date.getDate()} ${UZ_MONTHS[date.getMonth()]}, ${date.getFullYear()}`
}

export const toNewsCard = (item) => ({
  ...item,
  id: item?._id ?? item?.id,
  title: item?.title ?? '',
  date: formatDate(item?.created_at ?? item?.date),
  category: getCategoryName(item?.category),
  image: getPrimaryImage(item),
  images: getImages(item),
  video: getPrimaryVideo(item),
  videoUrl: getPrimaryVideo(item)?.url ?? item?.videoUrl ?? item?.url ?? '',
  videoThumbnail: getPrimaryVideo(item)?.thumbnail ?? getPrimaryImage(item),
  mimeType: getPrimaryVideo(item)?.mimeType ?? '',
  desc: item?.description ?? item?.desc ?? '',
  content: item?.content ?? '',
  views: item?.views ?? 0,
})

export const toVideoCard = (item) => ({
  ...item,
  id: item?._id ?? item?.id,
  title: item?.title ?? '',
  date: formatDate(item?.created_at ?? item?.date),
  rawDate: item?.created_at ?? item?.date,
  duration: item?.duration ?? '',
  thumbnail: getPrimaryImage(item),
  video: getPrimaryVideo(item),
  videoUrl: getPrimaryVideo(item)?.url ?? item?.videoUrl ?? item?.url ?? '',
  mimeType: getPrimaryVideo(item)?.mimeType ?? '',
  category: getCategoryName(item?.category),
  description: item?.description ?? '',
  views: item?.views ?? 0,
})

export const toRecommendationCard = (item) => ({
  ...item,
  id: item?._id ?? item?.id,
  title: item?.title ?? '',
  href: item?.href ?? '',
  source: item?.source ?? '',
  date: formatDate(item?.created_at),
  created_at: item?.created_at ?? '',
})

export const contentToHtml = (content = '') => {
  if (content.includes('<')) return content

  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('')
}
