all: snapshot/all.css

snapshot/all.css: less-server/public/less/styles.less
	lessc $< > $@
