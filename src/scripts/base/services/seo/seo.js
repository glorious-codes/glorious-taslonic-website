import ENV from '@environment';

const _public = {};

_public.buildHead = ({ title, description, keywords, imageFilename, imageSize } = {}) => {
  const desc = Array.isArray(description) ? description.join(' ') : description;
  const filename = imageFilename || 'logo-taslonic-512x512.png';
  const imageUrl = `${ENV.APP.BASE_URL}/images/${filename}`;
  return {
    title: {
      inner: title
    },
    meta: [
      { name: 'application-name', content: '' },
      { name: 'description', content: desc, id: 'desc' },
      { name: 'keywords', content: keywords },
      // Twitter
      { name: 'twitter:card', content: buildTwitterCardSize(imageSize) },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:site', content: '@taslonic' },
      { name: 'twitter:creator', content: '@taslonic' },
      // Google+ / Schema.org
      { itemprop: 'name', content: title },
      { itemprop: 'desc', content: desc },
      // Facebook / Open Graph
      { property: 'og:title', content: title },
      { property: 'og:image', content: imageUrl }
    ]
  };
};

function buildTwitterCardSize(imageSize){
  return imageSize == 'large' ? 'summary_large_image' : 'summary';
}

export default _public;
