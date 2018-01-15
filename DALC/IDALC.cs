using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MAPS_mvc.Models;
namespace MAPS_mvc.DALC
{
    public interface IDALC
    {
        UserList GetUserList();

        MovieList GetMoviesList();
    }
}
