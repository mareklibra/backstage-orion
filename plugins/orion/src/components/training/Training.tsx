import React, {useContext, useEffect} from "react";
import ToastContext from "../../context/toast";
import {PageHeader} from "../PageHeader";
import {Content, ContentHeader, Page, SupportButton, Tabs} from "@backstage/core-components";
import {Typography} from "@material-ui/core";


export const Training = () => {
    const toastContext = useContext(ToastContext);
    useEffect(() => {
        toastContext.handleOpenToast(
            `Oops! Something went wrong. Please try again`,
        );
    }, []);

    return (
        <Page themeId="tool">
            <PageHeader/>
            <Content>
                <ContentHeader title="Training">
                    <SupportButton title="Need help?">Lorem Ipsum</SupportButton>
                </ContentHeader>
                <Typography paragraph>
                    Performance-based training recommendations
                </Typography>
                <Tabs
                    tabs={[{
                        label: `RECENT`,
                        content: <div>recent</div>,
                    }, {
                        label: `HISTORY`,
                        content: <div>history</div>,
                    }]}
                />
            </Content>
        </Page>
    );

}