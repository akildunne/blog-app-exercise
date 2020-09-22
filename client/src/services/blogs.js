import api from './apiConfig'

export const getBlogs = async () => {
  try {
      const response = await api.get('/blogs')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getBlog = async id => {
  try {
      const response = await api.get(`/blogs/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createBlog = async blog => {
  try {
      const response = await api.post('/blogs', blog)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateBlog = async (id, blog) => {
  try {
      const response = await api.put(`/blogs/${id}`, blog)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteBlog = async id => {
  try {
      const response = await api.delete(`/blogs/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}