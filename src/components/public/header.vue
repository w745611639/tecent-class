<template>
	<div :class="$style.header">
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDMjc1OTcyODRGNDExRTdBQkNERDk2NDM3OEQ0MzAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDMjc1OTczODRGNDExRTdBQkNERDk2NDM3OEQ0MzAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkMyNzU5NzA4NEY0MTFFN0FCQ0REOTY0Mzc4RDQzMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkMyNzU5NzE4NEY0MTFFN0FCQ0REOTY0Mzc4RDQzMDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70TGt/AAAEdUlEQVR42uyad2hUWRTGz9hFQmyxskpWRIgVEyxsICKKa1nLimUXG0YiERUV9c/Egn9YV8W1oiiKQUXBtcQaCAgaTQRRo7KrsWCPdVdiI9nvzHyBUWbiK/c9R8mFH8NM3px3v3fuvadMAhUVFfI9jUC1oBgftVLOf1d6pIYP90gFZ0nqtyyoHlgO8kEvks/P6nm2h5ILPNlDKWAHSIry92IwERTGuodqgQVcXklVXJfEaxaC2rHqoSR6JcXm9wrpreJY8ZDamAuKHIipXJ5FtFHja3uoHdhu8PQ6AyaBm357KAAywSXDR3EqbWbyHr4I+gEcB+tBAw9OyAa0fZz38lSQbt7LoL8PAbk/7zXRC0HNwUHul3irxrMSRTJa41wOOBYVz3se5ByMHAqjuASa2p1NYY/Q660ykcUleNz/ufJYKZgG9jn1UGOQA/Y6ERM+fqwvshVRak4bkfrOD+amnEsO52ZL0EBwBYw1mZL83kJkT2eRnvGuTI3l3vrZiqA4sAkcAS292Omt6oqs6xDaX3E1nZsBRznXuGiC0hgDMpzGADtBbGgC1g+81aeRKzMZnHPa54KyQB5I9LMYS6gjsqK9yPy2rswkcu5Z4YJ6+VTsRX7UASNbtGe4oBFgNfC1wfDsA7zzt8jS267MfARLwPDK+kXHOzAbnGAJkOClEH1qh57iCd4Tef3RlanrTGYLop1yuaALOOmVmAd4dNNviCwqcSWmnCuqe7iYaHHoEc/4+eCDKSE6g92wPAYRpOCVK1N4FNKXK6rMamAtZzPjJ/CPWzGa+qSjHl11FzMod7VSN4OubLZE7QFUNS6AZLAOjLc7g8OloSW2/YHIe3fHzX0wBRwzWbF+rRbrLjATvLDapYnV8UQr1+RcORD+YdFAf9tYpoaK6EwxmmXvsfrFWPOQnn8zIGQn3//KWkyLuzF+tbF03DVg4yS9spP1zm6w32qlakqQxoHpTBCngn8d2HjDSnQAxNzTRFxCTcffnEzIzZK7CMZhEtck1M7djA17Wuz16YJ9ONjQPpwWEmvVptss1UnQXwZ6U8wwLrkNeP+Etck88LYKG295TRrFDAZX3YpxEod04hMwiXyu8zWfTaKEATAP3orW6w72smFDl1VD5mRWWlUB08e2btKuFDOEPYdxEYqtU5pZ4Lo76kWQDd6TbHq2OKxvYUXMOS88JMm5wZc/wCwrKRyYrHkXnmqT4L1yg60obZGsBOkWb6ttK20NP/MqsK5gmfHF7hVL4zUQUkYxA9ixsSKmlLFndKUYSx6y8yv41IWfvNWnv0qsdVL1sECKKt1sZAqZ/N4nY1O2d3FomwZCKxkwRjOLYp5r+w6MjCTGj8CqgXAQ20mvXdr6S0K/Aub4HYciHedbXJTuL1hraTx7bKL9Y2rc4abPtJECHQYdWfMYGabLB/XWRpbJeVVc95Ldml/AQ5MT8Koe0oyhHxPXNxE6S52YRRgfXhZ46q0/ubeOsIeWzkPkvlc39aPAu8VUyZdR/f9y1YJ8Hv8LMAC3bi/uZPgfuQAAAABJRU5ErkJggg==">
		<div :class="$style.search">
			<input type="text" placeholder="搜索老师、机构、课程">
			<!-- <i></i> -->
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" module>
	.header {
		height: 80px;
		padding-top: 10px;
		padding-left: 26px;
		display: flex;
		flex-direction: row;
		align-items: center;
		> img {
			width: 52px;
			height: 52px;
		}
		.search {
			flex-grow: 1;
			box-sizing: border-box;
			padding: 0 20px;
			height: 50px;
			line-height: 50px;
			font-size: 0;
			input {
				width: 100%;
				height: 50px;
				box-sizing: border-box;
				background: #f2f2f6;
				border: none;
				font-size: 22px;
				text-align: center;
				&::place-holder {
					color: red;
				}
			}

		}
	}
</style>