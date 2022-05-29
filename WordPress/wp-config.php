<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'xiaoye6688_xyz' );

/** MySQL database username */
define( 'DB_USER', 'xiaoye6688_xyz' );

/** MySQL database password */
define( 'DB_PASSWORD', 'dwXNSdZWw5' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'KQl{-5%zJd8TZW.a,.lI zf~-.h*`T3yccq2uFuTH$%wnu7e,?}>g3*7PU(0` Yt' );
define( 'SECURE_AUTH_KEY',  ':=d;^2aMeL:xy4eR@T[$Pb*U/j:J5Qy])K[Epz+cMxrVn?=9PSaI,_=nF,D;t? T' );
define( 'LOGGED_IN_KEY',    ':yQ!?S^}7KJ55@SF=f6@4!,}zfkvL4Y:p_LuPuR{<-S/_mat(sjSV;O4}Yh?>i3C' );
define( 'NONCE_KEY',        ';`q Yhrti :DdEmI:f9V42hL#MEEzag6_e.e B$ZS?:;JVSP]~:^NglS#d~3rM>U' );
define( 'AUTH_SALT',        'WnEyPZItzF,%v|0u&8||=2i%$pc9]0;Y7q E#p 6honhnuvDqJj@%5X|O<p=[WyT' );
define( 'SECURE_AUTH_SALT', 'zkXT(4t.fN(^DWZ2M`jmJhtr`Mf+F PM66E>0H*p,^xkBR_I/~=`*H?,8&hoZUUG' );
define( 'LOGGED_IN_SALT',   'nPNIP^Y<T kn[e=y@#=H 4R9Cc8CT (;H],1Z?Ay7*XU#-_qdyjdIRnmuxiXAmCj' );
define( 'NONCE_SALT',       '].-jg`W0B34Yo-5L,hmX m>*x^D2Y?H4^`Ntt5i,rMk[v-:G+:-1,dc%b? H(M8_' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
