const connection = require('../database/connection.js');

class Post {
  static async getPosts() {
    console.log('in posts getposts');
    let allPostsArray = [];
    let allPosts = await connection.pool.query(
      'SELECT * FROM posts ORDER BY id ASC'
    );
    allPosts.rows.forEach((element) => {
      allPostsArray.push({ id: element.id, message: element.text });
    });
    return allPostsArray;
  }
}

module.exports = Post;
