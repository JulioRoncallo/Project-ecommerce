import Link from "next/link";
import styles from '../../styles/layoutDashboardOrders.module.css'

export default function DashboardLayout ({
    children,
} : {
    children: React.ReactNode;
}) {
    return <main>
        <nav className={styles.navLayoutDashboardOrders}>
            <Link className={styles.LinkLayout} href="/dashboard" >Profile</Link>
            <Link className={styles.LinkLayout} href="/dashboard/orders" >Orders</Link>
        </nav>
        {children}
    </main>
}