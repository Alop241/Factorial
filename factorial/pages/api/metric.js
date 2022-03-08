// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 8}
  ];

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.send(data)
}