import React from 'react';
import * as style from './ErrorPageStyle';
function ErrorPage({ history }) {
	return (
		<style.Main>
			<style.Img src="/img/error.webp" alt="error" />
			<style.Text>페이지에서 에러가 발생했습니다.</style.Text>
			<style.Button
				type="button"
				onClick={() => {
					history.push({
						pathname: '/',
					});
				}}
			>
				메인 페이지로 이동하기
			</style.Button>
		</style.Main>
	);
}

export default ErrorPage;
