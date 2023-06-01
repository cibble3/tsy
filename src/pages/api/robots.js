export default function handler(req, res) {
  res.send(
    `User-agent: Googlebot
Allow: /
Disallow: /search
User-agent: *
Allow: /
Disallow: /search`
  );
}
