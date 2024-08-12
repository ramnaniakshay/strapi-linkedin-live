'use strict';

/**
 * my-blog-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-blog-site.my-blog-site');
