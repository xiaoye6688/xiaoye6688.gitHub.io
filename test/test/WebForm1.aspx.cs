using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Windows;

namespace test
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        private MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
        private MySqlConnection connection;
        protected void Page_Load(object sender, EventArgs e)
        {

        }
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

        protected void Unnamed_Click(object sender, EventArgs e)
        {
            builder.UserID = "root";
            builder.Password = "123456";
            builder.Server = "localhost";
            builder.Database = "test";
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