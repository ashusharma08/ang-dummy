
using System.Net.Http;
using System.Web.Http;
using System.Net;
using MAPS_mvc.BLC;

namespace MAPS_mvc.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetUserList()
        {
            var blc = new UsersBLC(new DALC.UsersDALC());
            return Request.CreateResponse(HttpStatusCode.OK, blc.GetUserList());
        }
    }
}
