import "../App.css";
import logo from "../assets/apple-icon-76x76.png";

export default function Footer() {
    return (
        <>
            <div className="container mx-auto my-12 text-left flex flex-col p-6 lg:px-8 max-w-[1280px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="-m-1.5 p-1.5">
                            <img src={logo} alt="UE Logo" />
                        </a>
                        <a href="/" className="text-yellow-500 font-bold tracking-widest text-2xl ml-4 drop-shadow-lg">
                            UNITED ELITE
                        </a>
                    </div>
                    <p className="text-right">Copyright &copy; 2022 United Elite. All Rights Reserved.</p>
                </div>
                <div className="container mx-auto my-12 text-left">
                    <div className="App-link">
                        <a href="">Privacy Policy</a>
                    </div><br />
                    <div className="App-link">
                        <a href="">Terms and Conditions</a>
                    </div><br /><br />

                    {/* Footer Text Content */}
                    <>
                        <p className="">
                            Neither World Financial Group Insurance
                            Agency, LLC nor its agents may provide tax or legal
                            advice.&nbsp; Anyone to whom this material is promoted,
                            marketed, or recommended should consult with and rely on their
                            own independent tax and legal professional regarding their
                            particular situation and the concepts presented herein.
                        </p><br />
                        <p className="">
                            Many people have experience various
                            levels of success with World Financial Group Insurance Agency,
                            LLC. However, each individual&rsquo;s experiences may vary. This
                            statement is not intended to nor does it represent that any
                            individual results are representative of what all participants
                            achieve when following the World Financial Group system.
                        </p><br />
                        <p className="">
                            California License # 0E9705<br />
                            United Elite is an organization that
                            is comprised of individuals associated with World Financial
                            Group Insurance Agency, LLC and World Financial Group, Inc., but
                            it is not an affiliated company of World Financial Group, Inc.,
                            WFGIA, World Financial Insurance Agency, LLC., World Financial
                            Group Insurance Agency of Hawaii, Inc., World Financial Group
                            Insurance Agency of Massachusetts, Inc. nor WFG Insurance Agency
                            of Puerto Rico, Inc. (collectively referred to as
                            &ldquo;WFG&rdquo;). These agents offer insurance products
                            through World Financial Group Insurance Agency, LLC, World
                            Financial Group Insurance Agency of Hawaii, Inc., World
                            Financial Group Insurance Agency of Massachusetts, Inc., World
                            Financial Insurance Agency, LLC. and/or WFG Insurance Agency of
                            Puerto Rico, Inc. &ndash; collectively WFGIA.
                        </p><br />
                        <p className="">
                            This material is intended for education
                            and training purposes only and is not intended to be , nor
                            should it be construed as, an offer or solicitation for the
                            purchase of sale of any specific product, financial services, or
                            other non-specified item.
                        </p><br />
                        <p className="">
                            WFG Headquarters: 11315 Johns Creek
                            Parkway, Suite 100, Johns Creek, GA 30097-1517. Phone:
                            770.453.9300
                        </p><br />
                        <p className="">
                            United Elite Headquarters: 10085 Scripps Ranch Court Suite A, San Diego, CA, 92131
                        </p><br />
                        <p className="">
                            Insurance Products and Services
                            available only to the residents of:<br /> Alabama (AL), Arizona (AZ), California
                            (CA), Florida (FL), Georgia (GA), Hawaii (HI), Kentucky (KY),
                            &nbsp;Louisiana (LA), Massachusetts (MA), Maryland (MD),
                            Mississippi (MS), Montana (MT), &nbsp;New Mexico (NM), North
                            Carolina (NC), Oregon (OR), Pennsylvania (PA), South Carolina
                            (SC), Utah (UT), Virginia (VA), &nbsp;Washington (WA), Wisconsin
                            (WI), West Virginia (WV).
                        </p><br />
                        <p className="">
                            Our platform offers the power
                            of choice.
                        </p><br />
                        <p className="">
                            11 Providers listed maintains
                            selling agreement (s) with World Financial Group Insurance Agency,
                            LLC. World Financial Group Insurance Agency, LLC and its
                            subsidiaries.
                        </p><br />
                        <p className="">
                            12 Maintains selling
                            agreement(s) with World Financial Group Insurance Agency, LLC. World
                            Financial Group Insurance Agency, LLC and Transamerica Life
                            Insurance Company are affiliated companies.
                        </p><br />
                        <p className="">
                            13 The city and state
                            locations of these companies are: Transamerica Life Insurance
                            Company, Cedar Rapids, Iowa; Pacific Life Insurance Company, Newport
                            Beach, California; Nationwide Life Insurance Company, Columbus,
                            Ohio; Everest Funeral Package, LLC, Houston, Texas; AMS Financial
                            Solutions, Baton Rouge, Louisiana; Crump, Harrisburg, Pennsylvania;
                            Athene Annuity and Life Company, West Des Moines, Iowa
                        </p><br />
                        <p className="">
                            14 The World Financial Group
                            Insurance Agency, LLC Financial Needs Analysis, developed by WFGIA,
                            is based on the accuracy and completeness of the data provided by
                            the client. The analysis uses sources that are believed to be
                            reliable and accurate, although they are not guaranteed. Discuss any
                            legal, tax or financial matter with the appropriate professional.
                            Neither the information presented nor any opinion expressed
                            constitutes solicitation for the purchase or sale of any specific
                            product or financial service.
                        </p><br />
                        <p className="">
                            1724691-12.21
                        </p>
                    </>
                </div>
            </div>
        </>
    )
}