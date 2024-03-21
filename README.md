# Read One Piece

Read One Piece is a platform dedicated to provide the pleasant experience of reading One Piece mangá without any distraction.

![docs/app_img.png](docs/app_img.png)

Built with Laravel, Vite and React.

## Requirements

- PHP 8.1

## Instalation

- Setup an PHP config in your server
- Set filesystem driver to `public`. Set env var `FILESYSTEM_DISK` to `public`.
- Upload manga files to `storage/app/public/manga` and organize mangás using the following pattern: `cap_XXXX`, where `XXXX` is the chapter number with 0 paddings on left, e.g. `cap_0001`.
