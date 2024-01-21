
export const searchPosts = (query) => {
  return `*[ _type == 'posts' && postTitle match "*${query}*"] {
    ...,
    subject[]-> {slug}
  }`;
}

export const fetchSubjectNames = (branch, sem) => {
  return `*[ _type == "subjects" && branch == "${branch}" && sem == "${sem}"]{title, slug}`;
}

export const fetchFiles = (branch, sem, subjectSlug) => {
  return `*[ _type == "posts" && branch == "${branch}" && sem == "${sem}" && subject[0]._ref == *[_type == "subjects" && slug.current == "${subjectSlug}"][0]._id ]{
    files[] ->,
    links[] ->,
  }`;
}

export const fetchPYQs = (branch, sem, subjectSlug) => {
  return `*[ _type == "subjects" && branch == "${branch}" && sem == "${sem}" && slug.current == "${subjectSlug}"]{
    PYQs[] ->,
  }`;
}

export const whatsAppSearch = (query) => {
  return `*[ _type == 'posts' && postTitle match "*${query}*"][0] {
    files[0]-> {file}
  }`;
}


