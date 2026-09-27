export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot"
      />
      <br />
      Monkey D Luffy from One Piece:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Monkey D. Luffy"
        src="https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png"
      />
      <br />
      My image:
      <br />
      <img
        id="wd-your-image"
        width="250px"
        alt="Portrait of Sudaiv Shetty"
        src="/images/my-picture.jpg"
      />
    </div>
  );
}
