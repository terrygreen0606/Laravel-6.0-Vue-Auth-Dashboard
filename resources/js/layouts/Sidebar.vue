<template>
    <nav class="mt-2">
        <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
        >
            <li :key="item.name" v-for="item in subItems" class="nav-item has-treeview">
                <router-link :to="item.link" class="nav-link" active-class="active" exact>
                    <i class="nav-icon" :class="item.iconMain"></i>
                    <p>
                        {{item.name}}
                        <i class="right" :class="item.iconSub"></i>
                    </p>
                </router-link>
                <ul class="nav nav-treeview">
                    <li class="nav-item" v-for="subItem in item.children" :key="subItem.name">
                        <router-link
                            :to="subItem.link"
                            class="nav-link"
                            active-class="active"
                            exact
                        >
                            <i class="nav-icon" :class="subItem.icon"></i>
                            <p>{{subItem.name}}</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li :key="item.name" v-for="item in mainItems" class="nav-item">
                <router-link :to="item.link" class="nav-link" active-class="active" exact>
                    <i class="nav-icon" :class="item.icon"></i>
                    <p>{{item.name}}</p>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            navItems: [
                {
                    name: "Dashboard",
                    link: "/dashboard",
                    icon: "fas fa-tachometer-alt"
                },
                { name: "Profile", link: "/profile", icon: "fas fa-user" },
                {
                    name: "Management",
                    link: "/management",
                    iconMain: "fas fa-cog",
                    iconSub: "fas fa-angle-left",
                    children: [
                        {
                            name: "Active Page",
                            link: "/management/active",
                            icon: "fas fa-circle"
                        },
                        {
                            name: "Inactive Page",
                            link: "/management/inactive",
                            icon: "fas fa-circle"
                        }
                    ]
                },
                { name: "Logout", link: "/", icon: "fa fa-power-off" }
            ]
        };
    },

    computed: {
        subItems: function() {
            return this.navItems.filter(item => {
                if (item.children) return item;
            });
        },
        mainItems: function() {
            return this.navItems.filter(item => {
                if (!item.children) return item;
            });
        }
    }
};
</script>

<style scoped>
</style>
