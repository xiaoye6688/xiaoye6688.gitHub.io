using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using MySql.Data.MySqlClient;

namespace ClassLibrary1
{
    public class Class1
    {
        private MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
        private MySqlConnection connection;
        private void button1_Click(object sender, EventArgs e)
        {
            builder.UserID = "root";
            builder.Password = "176164";
            builder.Server = "localhost";
            builder.Database = "new_schema";
            connection = new MySqlConnection(builder.ConnectionString);
            try
            {
                //打开数据库连接
                connection.Open();
                MessageBox.Show("数据库已经连接了！");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
