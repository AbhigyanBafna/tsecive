
export const searchPosts = (query) => {
  return `*[_type == "posts" && postTitle match "*${query}*"]{postTitle, slug}`;
}
