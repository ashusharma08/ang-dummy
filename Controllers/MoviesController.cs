using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MAPS_mvc.BLC;

namespace MAPS_mvc.Controllers
{
    public class MoviesController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetMoviesList()
        {
            var blc = new MoviesBLC(new DALC.MoviesDALC());
            return Request.CreateResponse(HttpStatusCode.OK, blc.GetMoviesList());
        }
    }
}
