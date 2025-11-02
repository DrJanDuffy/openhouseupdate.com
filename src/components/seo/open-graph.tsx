import { component$ } from '@builder.io/qwik'

export interface OpenGraphProps {
  title: string
  description: string
  type?:
    | 'website'
    | 'article'
    | 'profile'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'book'
    | 'payment.link'
  url?: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  imageType?: string
  siteName?: string
  locale?: string
  localeAlternate?: string[]
  determiner?: 'a' | 'an' | 'the' | '' | 'auto'
  audio?: string
  audioType?: string
  video?: string
  videoType?: string
  videoWidth?: number
  videoHeight?: number
  // Article specific
  articleAuthor?: string[]
  articlePublishedTime?: string
  articleModifiedTime?: string
  articleExpirationTime?: string
  articleSection?: string
  articleTag?: string[]
  // Profile specific
  profileFirstName?: string
  profileLastName?: string
  profileUsername?: string
  profileGender?: 'male' | 'female'
  // Book specific
  bookAuthor?: string[]
  bookIsbn?: string
  bookReleaseDate?: string
  bookTag?: string[]
  // Music specific
  musicDuration?: number
  musicAlbum?: string[]
  musicMusician?: string[]
  // Video specific
  videoActor?: string[]
  videoDirector?: string[]
  videoWriter?: string[]
  videoDuration?: number
  videoReleaseDate?: string
  videoTag?: string[]
  videoSeries?: string
  // Payment specific
  paymentDescription?: string
  paymentCurrency?: string
  paymentAmount?: number
  paymentExpiresAt?: string
  paymentStatus?: 'PENDING' | 'PAID' | 'FAILED' | 'EXPIRED'
  paymentId?: string
  paymentSuccessUrl?: string
}

export default component$<OpenGraphProps>((props) => {
  const {
    title,
    description,
    type = 'website',
    url,
    image = 'https://grokipedia.com/images/og-default.jpg',
    imageAlt = 'Open House Update - Las Vegas Real Estate',
    imageWidth = 1200,
    imageHeight = 630,
    imageType = 'image/jpeg',
    siteName = 'Open House Update',
    locale = 'en_US',
    localeAlternate = ['es_US'],
    determiner = 'auto',
    audio,
    audioType,
    video,
    videoType,
    videoWidth,
    videoHeight,
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleExpirationTime,
    articleSection,
    articleTag,
    profileFirstName,
    profileLastName,
    profileUsername,
    profileGender,
    bookAuthor,
    bookIsbn,
    bookReleaseDate,
    bookTag,
    musicDuration,
    musicAlbum,
    musicMusician,
    videoActor,
    videoDirector,
    videoWriter,
    videoDuration,
    videoReleaseDate,
    videoTag,
    videoSeries,
    paymentDescription,
    paymentCurrency,
    paymentAmount,
    paymentExpiresAt,
    paymentStatus,
    paymentId,
    paymentSuccessUrl,
  } = props

  return (
    <>
      {/* Basic Open Graph metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {localeAlternate.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}
      {determiner && <meta property="og:determiner" content={determiner} />}

      {/* Image metadata */}
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image.replace('http://', 'https://')} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Audio metadata */}
      {audio && (
        <>
          <meta property="og:audio" content={audio} />
          <meta property="og:audio:secure_url" content={audio.replace('http://', 'https://')} />
          {audioType && <meta property="og:audio:type" content={audioType} />}
        </>
      )}

      {/* Video metadata */}
      {video && (
        <>
          <meta property="og:video" content={video} />
          <meta property="og:video:secure_url" content={video.replace('http://', 'https://')} />
          {videoType && <meta property="og:video:type" content={videoType} />}
          {videoWidth && <meta property="og:video:width" content={videoWidth.toString()} />}
          {videoHeight && <meta property="og:video:height" content={videoHeight.toString()} />}
        </>
      )}

      {/* Article specific metadata */}
      {type === 'article' && (
        <>
          {articleAuthor?.map((author) => (
            <meta key={author} property="article:author" content={author} />
          ))}
          {articlePublishedTime && (
            <meta property="article:published_time" content={articlePublishedTime} />
          )}
          {articleModifiedTime && (
            <meta property="article:modified_time" content={articleModifiedTime} />
          )}
          {articleExpirationTime && (
            <meta property="article:expiration_time" content={articleExpirationTime} />
          )}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleTag?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Profile specific metadata */}
      {type === 'profile' && (
        <>
          {profileFirstName && <meta property="profile:first_name" content={profileFirstName} />}
          {profileLastName && <meta property="profile:last_name" content={profileLastName} />}
          {profileUsername && <meta property="profile:username" content={profileUsername} />}
          {profileGender && <meta property="profile:gender" content={profileGender} />}
        </>
      )}

      {/* Book specific metadata */}
      {type === 'book' && (
        <>
          {bookAuthor?.map((author) => (
            <meta key={author} property="book:author" content={author} />
          ))}
          {bookIsbn && <meta property="book:isbn" content={bookIsbn} />}
          {bookReleaseDate && <meta property="book:release_date" content={bookReleaseDate} />}
          {bookTag?.map((tag) => (
            <meta key={tag} property="book:tag" content={tag} />
          ))}
        </>
      )}

      {/* Music specific metadata */}
      {(type === 'music.song' ||
        type === 'music.album' ||
        type === 'music.playlist' ||
        type === 'music.radio_station') && (
        <>
          {musicDuration && <meta property="music:duration" content={musicDuration.toString()} />}
          {musicAlbum?.map((album) => (
            <meta key={album} property="music:album" content={album} />
          ))}
          {musicMusician?.map((musician) => (
            <meta key={musician} property="music:musician" content={musician} />
          ))}
        </>
      )}

      {/* Video specific metadata */}
      {(type === 'video.movie' ||
        type === 'video.episode' ||
        type === 'video.tv_show' ||
        type === 'video.other') && (
        <>
          {videoActor?.map((actor) => (
            <meta key={actor} property="video:actor" content={actor} />
          ))}
          {videoDirector?.map((director) => (
            <meta key={director} property="video:director" content={director} />
          ))}
          {videoWriter?.map((writer) => (
            <meta key={writer} property="video:writer" content={writer} />
          ))}
          {videoDuration && <meta property="video:duration" content={videoDuration.toString()} />}
          {videoReleaseDate && <meta property="video:release_date" content={videoReleaseDate} />}
          {videoTag?.map((tag) => (
            <meta key={tag} property="video:tag" content={tag} />
          ))}
          {videoSeries && <meta property="video:series" content={videoSeries} />}
        </>
      )}

      {/* Payment specific metadata */}
      {type === 'payment.link' && (
        <>
          {paymentDescription && (
            <meta property="payment:description" content={paymentDescription} />
          )}
          {paymentCurrency && <meta property="payment:currency" content={paymentCurrency} />}
          {paymentAmount && <meta property="payment:amount" content={paymentAmount.toString()} />}
          {paymentExpiresAt && <meta property="payment:expires_at" content={paymentExpiresAt} />}
          {paymentStatus && <meta property="payment:status" content={paymentStatus} />}
          {paymentId && <meta property="payment:id" content={paymentId} />}
          {paymentSuccessUrl && <meta property="payment:success_url" content={paymentSuccessUrl} />}
        </>
      )}

      {/* Twitter Card metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </>
  )
})
