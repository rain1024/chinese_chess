import requests
import re


def download_game(url):
    game_id = re.findall("id=(.*)", url)[0]
    print("CHINESE CHESS GAME DOWNLOADER")
    print(f"\n-> Downloading game for url {url}")
    r = requests.get(url)
    print(f"Game is downloaded")

    print(f"\n-> Extracting game content")
    try:
        text = r.text
        moves = re.findall("\[DHJHtmlXQ_34\](.*)\[/DHJHtmlXQ_34\]", text)[0]
        count = int(len(moves) / 4)
        print(f"Game information")
        print(f"\tGame id: {game_id}")
        print(f"\tPlay Count: {count}")
    except Exception as e:
        print(e)

    print(f"\n-> Saving game")
    game_filename = f"games/{game_id}"
    f = open(game_filename, "w")
    f.write(moves)
    print(f"Game is saved in {game_filename}")


if __name__ == '__main__':
    url = "http://www.01xq.com/e_game_view.asp?id=0250254F9F886E"
    download_game(url)
