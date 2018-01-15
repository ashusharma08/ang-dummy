using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MAPS_mvc.Models;

namespace MAPS_mvc.DALC
{
    public class UsersDALC : IDALC
    {
        public MovieList GetMoviesList()
        {
            throw new NotImplementedException();
        }

        public UserList GetUserList() => new UserList { Users = new List<User> {
            new User { Id = 1, Name = "Ashish" },
            new User { Id = 2, Name = "Yogita" },
            new User { Id = 3, Name = "Geetika" },
        } };
            
            
            
            
    }
}