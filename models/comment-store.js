'use strict';

import JsonStore from './json-store.js';

const commentStore = {
  store: new JsonStore('./models/comment-store.json', { comments: [] }),
  collection: 'comments',

  getAllComments() {
    return this.store.findAll(this.collection);
  },

  addComment(comment) {
    const comments = this.store.findAll(this.collection);
    comments.push(comment);
    this.store.save();
  },
};

export default commentStore;
