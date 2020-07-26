export  class URLS{
	
	private static apiUrl="http://localhost:49819/api";
	
	public static url=
	{
		loginPage:
		{
			login: URLS.apiUrl + "/User/Login" 
        },
        messagePage:
        {
            totalInfo:URLS.apiUrl+"/Message/GetTotalInfo",
            getMessages:URLS.apiUrl+"/Message/Messages",
            readMessage:URLS.apiUrl+"/Message/Read"
        }
	}
}