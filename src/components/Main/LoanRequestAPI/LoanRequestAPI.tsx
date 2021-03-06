// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";
import Snippet from "../Method/Snippet";

/**
 * A component that renders documentation about the LoanRequest API.
 */
export default class LoanRequestAPI extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <ContentAnchor id="LoanRequestAPI" />

                <SemanticHeader size="huge" className="SectionTitle">
                    LoanRequest API
                </SemanticHeader>

                {/* create */}

                <ContentAnchor id="LoanRequestCreate" />

                <SemanticHeader size="large">Creating a LoanRequest</SemanticHeader>

                <p>Create a loan request by specifying the terms of the agreement:</p>

                <Snippet
                    lang="JS"
                    code={`const loanRequest = await LoanRequest.create(dharma, {
    principalAmount: 5,
    principalToken: "WETH",
    collateralAmount: 100,
    collateralToken: "REP",
    interestRate: 12.3,
    termDuration: 6,
    termUnit: "months",
    debtorAddress: "0xd2f45e02ab7b190ac9a87b743eab4c8f2ed0e491",
    expiresInDuration: 5,
    expiresInUnit: "days",
});`}
                />

                {/* cancel */}

                <ContentAnchor id="LoanRequestCancel" />

                <SemanticHeader size="large">Cancelling a LoanRequest</SemanticHeader>

                <p>To cancel the loan request, call the `cancel` method:</p>

                <Snippet lang="JS" code="const txHash = await loanRequest.cancel();" />

                {/* fill */}

                <ContentAnchor id="LoanRequestFill" />

                <SemanticHeader size="large">Filling a LoanRequest</SemanticHeader>

                <p>
                    Any creditor with sufficient balance of the principal token can fill a
                    LoanRequest by calling the `fill` method:
                </p>

                <Snippet lang="JS" code={`const txHash = await loanRequest.fill();`} />

                {/* generateLoan */}

                <ContentAnchor id="LoanRequestGenerateLoan" />

                <SemanticHeader size="large">Generating a Loan</SemanticHeader>

                <p>
                    Once a loan request has been filled, you can generate an instance of the
                    associated loan by calling the `generateLoan` method:
                </p>

                <Snippet lang="JS" code={`const loan = await loanRequest.generateLoan();`} />

                {/* allowCollateralTransfer */}

                <ContentAnchor id="LoanRequestAllowCollateralTransfer" />

                <SemanticHeader size="large">Allow Collateral Transfer</SemanticHeader>

                <p>
                    Before a loan can be filled, the borrower will need to authorize the Dharma
                    smart contracts to hold the collateral in escrow. This can be accomplished by
                    calling the `allowCollateralTransfer` method:
                </p>

                <Snippet
                    lang="JS"
                    code={`const txHash = await loanRequest.allowCollateralTransfer();`}
                />

                {/* allowPrincipalTransfer */}

                <ContentAnchor id="LoanRequestAllowPrincipalTransfer" />

                <SemanticHeader size="large">Allow Principal Transfer</SemanticHeader>

                <p>
                    Before a loan can be filled, the creditor will need to authorize the Dharma
                    smart contracts to transfer the principal to the borrower on their behalf. This
                    can be accomplished by calling the `allowPrincipalTransfer` method:
                </p>

                <Snippet
                    lang="JS"
                    code={`const txHash = await loanRequest.allowPrincipalTransfer();`}
                />
            </Container>
        );
    }
}
