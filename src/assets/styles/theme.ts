const size = {
	mobile: '770px',
	tablet: '1220px',
	laptop: '1460px',
	desktop: '1700px',
};

const theme = {
	backgroundColor: '#12b886',
	mobile: `(max-width: ${size.mobile})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	desktop: `(max-width: ${size.desktop})`,
};

export default theme;
