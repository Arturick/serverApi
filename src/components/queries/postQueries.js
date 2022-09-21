import axios from "axios";
import { API_URL } from "../../config";

export const createPost = async (title, postType, additional) => {
  axios
    .post(
      `${API_URL}/createPost?postType=${postType}`,
      { title, additional },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => window.location.reload())
    .catch((error) => console.log(error));
};

export const deletePostImage = async (index, postType, postTitle) => {
  axios
    .delete(
      `${API_URL}/deletePostImage?index=${index}&postType=${postType}&postTitle=${postTitle}`
    )
    .then(() => window.location.reload())
    .catch((error) => console.log(error));
};

export const deletePost = async (title, postType) => {
  axios
    .delete(`${API_URL}/deletePost?postType=${postType}&postTitle=${title}`)
    .then(() => window.location.reload())
    .catch((error) => console.log(error));
};

export const getPosts = async (postType) => {
  const response = await axios.get(`${API_URL}/getPosts?postType=${postType}`)
    .catch((error) => console.log(error));

  return response;
};

export const getPostsById = async(ids, postType) => {
  const response = await axios.get(`${API_URL}/getPostsById?ids=${ids}&postType=${postType}`)
  .catch((error) => console.log(error));

  return response;
}

export const getPost = async (title, postType) => {
  const response = await axios.get(
    `${API_URL}/getPost?postTitle=${title}&postType=${postType}`
  );

  const post = response.data.post;

  if (!post?.postImages) return { post };

  return { post };
};

export const updatePost = async (post, postType) => {
    delete post.postImages;

    axios
    .post(
      `${API_URL}/updatePost?postType=${postType}`,
      { post },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => console.log(error));
};

export const changeProductCategory = async (productTitle, newCategoryTitle) => {
  axios
    .post(
      `${API_URL}/changeProductCategory?productTitle=${productTitle}&newCategoryTitle=${newCategoryTitle}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => console.log(error));
};

export const deleteProductFromCategory = async (categoryTitle, productTitle) => {
  axios.post(
    `${API_URL}/deleteProductFromCategory?categoryTitle=${categoryTitle}&productTitle=${productTitle}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then(() => window.location.reload())
  .catch((error) => console.log(error));
}