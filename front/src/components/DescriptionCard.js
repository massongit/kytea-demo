import React from "react"
import PanelCardBody from "../containers/PanelCardBody"
import {Card, CardHeader} from "reactstrap"
import {FormattedMessage} from "react-intl"

/**
 * 概要パネル
 * @returns {element} 概要パネル
 */
const DescriptionCard = () => (
    <Card className="mt-4">
        <CardHeader>
            <FormattedMessage id="title.description"/>
        </CardHeader>
        <PanelCardBody messageId="description.kyTea"/>
    </Card>
)

export default DescriptionCard
