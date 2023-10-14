import { client } from './client'

export const validateBranch = async (subjectRefs, context) => {
  if (subjectRefs.length !== 1) {
    return 'You must select only one subject.';
  }

  const currentPost = context.document;
  const postBranch = currentPost.branch; //Getting post branch

  const query = `*[_type=="subjects" && _id == "${subjectRefs[0]._ref}"]{...}`;

  let subjectBranch;
  await client.fetch(query).then((data) => {
    subjectBranch = data[0].branch; //Getting subject branch
  });

  if (postBranch !== subjectBranch) {
    return 'The selected subject branch must match the post branch.';
  }

  return true;
};

export const validatePYQs = async (fileDocRefs) => {
  if (!fileDocRefs || fileDocRefs == undefined) {
    // No file references, so the validation is optional
    return true;
  }

  const query = `*[_type=="fileDoc" && _id == "${fileDocRefs[0]._ref}"]{...}`;

  let fileType;
  await client.fetch(query).then((data) => {
    fileType = data[0].fileType; // Getting fileDoc's FileType
  });

  if (fileType !== 'pyq') {
    return 'Please select a PYQ file.';
  }

  return true;
};

// export const uniqueSlug = async (context) => {
//   const currentSlug = context?.document?.slug?.current;
//   const currentId = context?.document?._id;

//   if (!currentSlug || currentSlug == undefined) {
//     //Slug not defined.
//     return 'Slug is required.';
//   }

//   const query = `*[_type == "posts" && _id != '${currentId}'] {slug}`;

//   // Initialize slugs array
//   let slugs;

//   try {
//     slugs = await client.fetch(query);
//   } catch (error) {
//     // Handle any potential query errors here
//     console.error('Error fetching slugs:', error);
//     return false; // Return false on error
//   }

//   // Check if currentSlug is unique
//   const isUnique = slugs.every((slugData) => slugData.current !== currentSlug);

//   return isUnique;
// };