module.exports = ({ env }) => ({
    url: env("STRAPI_URL"),
    port: env.int("PORT", 1337),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '9ccc4b518533afc1e1a9a154d5c6f37a'),
      },
    },
  });