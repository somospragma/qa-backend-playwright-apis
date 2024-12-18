export class PrintInformationHelper{
 
    static printInformationRequest(headerRequest: { [key: string]: string; } | string, bodyRequest?: { [key: string]: string | undefined; } |string ): void {
        console.log("----------   Request Information   ----------\n",);
        console.log("Headers: ", headerRequest, "\n");
        if (bodyRequest) console.log("Body Request: ", bodyRequest), "\n";
    };
 
    static printInformationResponse(statusResponse: number , headerResponse: { [key: string]: string; }, bodyResponse: { [key: string]: string; } | string): void {
        console.log("\n----------   Response Information   ----------\n",);
        console.log("Headers: ", headerResponse, "\n");
        console.log("Status Response: ", statusResponse, "\n");
        console.log("Body Response:", bodyResponse, "\n");
 
    };
}