const addHighscore = async (game, score, nic) => {
  const body = {
    score: score,
    nickname: nic
  };
  fetch(`./../server/addHS.php?game=${game}/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    body: JSON.stringify(body)
  });
};
