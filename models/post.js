const db = require('../utils/db');

const Post = {
  getAll: async () => {
    const result = await db.query('SELECT * FROM posts');
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async (title, content) => {
    const result = await db.query(
      'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    return result.rows[0];
  },

  update: async (id, title, content) => {
    const result = await db.query(
      'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = Post;