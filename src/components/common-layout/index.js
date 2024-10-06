import { auth } from "@/auth";

const { default: ReduxProvider } = require("@/provider");

async function CommonLayout({ children }) {
    const getSession = await auth();
    return (
        <ReduxProvider getSession={getSession}>{children}</ReduxProvider>
    );
}

export default CommonLayout;