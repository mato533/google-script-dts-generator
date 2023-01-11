declare namespace google {
    /**
     * Methods available to Google Apps Script
     */
    namespace script {
        interface PublicEndpoints {
            [key: string]: (...args: any[])=>any;
            objectReturnFunc(): {
                attr1: string;
                attr2: number;
                attr3: {
                    value: boolean;
                };
            };
        }




    }
}
