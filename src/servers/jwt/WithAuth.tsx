import Loading from "@components/Loading/Loading";
import useAuth from "@hooks/useAuth";
import routeApp from "entities/constant/routeApp";
import type { NextComponentType } from "next";
import type { BaseContext } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useRef } from "react";
import { useAppDispatch } from "states";

const thirtyMinutes = 30 * 60 * 1000; // miliseconds

export default function WithAuth(WrappedComponent: NextComponentType<BaseContext>) {
	const Auth = (props: JSX.IntrinsicAttributes) => {
		const timeRef = useRef<NodeJS.Timeout>();

		const { auth, logout, isLoading } = useAuth();
		const router = useRouter();
		const dispatch = useAppDispatch();

		const handleAction = useCallback(() => {
			clearTimeout(timeRef.current);
			const handler = setTimeout(() => {
				logout();
				clearTimeout(timeRef.current);
				dispatch({
					type: "WARNING_MESSAGE",
					data:
						"Đã hết thời gian truy cập ứng dụng. Vì lý do bảo mật, ứng dụng sẽ tự động đăng xuất. Vui lòng đăng nhập lại để tiếp tục sử dụng",
				});
			}, thirtyMinutes);

			timeRef.current = handler;
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		useEffect(() => {
			["mousemove", "keydown", "click"].forEach((event) => {
				window.document.addEventListener(event, handleAction);
			});

			return () => {
				clearTimeout(timeRef.current);
				["mousemove", "keydown", "click"].forEach((event) => {
					window.document.removeEventListener(event, handleAction);
				});
			};
		}, [handleAction]);

		if (isLoading) return <Loading />;

		if (!auth.isAuthenticated) {
			router.push(routeApp.signIn);
			return <Fragment />;
		}
		// If user is logged in, return original component
		return <WrappedComponent {...props} />;
	};

	if (WrappedComponent.getInitialProps) {
		Auth.getInitialProps = WrappedComponent.getInitialProps;
	}

	return Auth;
}
