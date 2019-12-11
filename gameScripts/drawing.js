function draw_WASD(pos) {
  const color = "lightgrey";
  const fillColor = "#FFFFFF30";
  const thickness = 2;
  const size = 60;
  square_rounded(pos.x, pos.y, size, size, 5, color, thickness, fillColor);
  square_rounded(
    pos.x - size * 1.2,
    pos.y + size * 1.2,
    size,
    size,
    5,
    color,
    thickness,
    fillColor
  );
  square_rounded(
    pos.x,
    pos.y + size * 1.2,
    size,
    size,
    5,
    color,
    thickness,
    fillColor
  );
  square_rounded(
    pos.x + size * 1.2,
    pos.y + size * 1.2,
    size,
    size,
    5,
    color,
    thickness,
    fillColor
  );
  canvasText(
    "W",
    { x: pos.x + size / 2, y: pos.y + size },
    "arial",
    35,
    "white"
  );
  canvasText(
    "A",
    { x: pos.x - size * 1.2 + size / 2, y: pos.y + size * 1.2 + size },
    "arial",
    35,
    "white"
  );
  canvasText(
    "S",
    { x: pos.x + size / 2, y: pos.y + size * 1.2 + size },
    "arial",
    35,
    "white"
  );
  canvasText(
    "D",
    { x: pos.x + size * 1.2 + size / 2, y: pos.y + size * 1.2 + size },
    "arial",
    35,
    "white"
  );
}

const square_rounded = (x, y, w, h, rad, color, borderWidth, fillColor) => {
  const tl = new Point(x, y);
  const tr = new Point(x + w, y);
  const bl = new Point(x, y + h);
  const br = new Point(x + w, y + h);
  begin();
  con.arc(tl.x + rad, tl.y + rad, rad, Math.PI, (3 * Math.PI) / 2, false);
  con.arc(tr.x - rad, tr.y + rad, rad, (3 * Math.PI) / 2, 0, false);
  con.arc(br.x - rad, br.y - rad, rad, 0, Math.PI / 2, false);
  con.arc(bl.x + rad, bl.y - rad, rad, Math.PI / 2, Math.PI, false);
  con.lineTo(tl.x, tl.y + rad);
  stroke(color, borderWidth);
  if (fillColor) {
    fill(fillColor);
  }
  end();
};
