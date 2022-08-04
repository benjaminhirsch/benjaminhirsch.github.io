tailwind:
	npx tailwindcss -c ./tailwind.config.js -i ./static/css/src-main.css -o ./static/css/main.css --watch
publishcss:
	npx tailwindcss -c ./tailwind.config.js -i ./static/css/main.css -o ./public/css/main.css --minify
serve:
	hugo server --buildDrafts