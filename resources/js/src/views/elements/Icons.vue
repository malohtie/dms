<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="A huge collection of multi-purpose, uniquely designed, font icons." title="Icons">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Icons</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Search Section -->
            <div class="input-group input-group-lg push">
                <input class="js-icon-search form-control font-size-base" placeholder="Try home or user.." type="text"
                       v-model="search">
                <div class="input-group-append">
                <span class="input-group-text">
                    <i class="fa fa-search"></i>
                </span>
                </div>
            </div>
            <!-- END Search Section -->

            <!-- Font Awesome Regular -->
            <base-block :title="`(${ filteredIconsFaRegular.length }) Font Awesome Regular`" btn-option-content>
                <template #subtitle>
                    <small class="text-lowercase"><code>far fa-*</code></small>
                </template>
                <b-row class="items-push-2x text-center">
                    <b-col :key="`far-icon-${index}`" lg="4" sm="6" v-for="(icon, index) in filteredIconsFaRegular"
                           xl="3">
                        <p>
                            <i :class="`far fa-2x fa-${ icon }`"></i>
                        </p>
                        <code>{{ icon }}</code>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Font Awesome Regular -->

            <!-- Font Awesome Solid -->
            <base-block :title="`(${ filteredIconsFaSolid.length }) Font Awesome Solid`" btn-option-content>
                <template #subtitle>
                    <small class="text-lowercase"><code>fa fa-*</code></small>
                </template>
                <b-row class="items-push-2x text-center">
                    <b-col :key="`fa-icon-${index}`" lg="4" sm="6" v-for="(icon, index) in filteredIconsFaSolid" xl="3">
                        <p>
                            <i :class="`fa fa-2x fa-${ icon }`"></i>
                        </p>
                        <code>{{ icon }}</code>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Font Awesome Solid -->

            <!-- Font Awesome Brands -->
            <base-block :title="`(${ filteredIconsFaBrands.length }) Font Awesome Brands`" btn-option-content>
                <template #subtitle>
                    <small class="text-lowercase"><code>fab fa-*</code></small>
                </template>
                <b-row class="items-push-2x text-center">
                    <b-col :key="`fab-icon-${index}`" lg="4" sm="6" v-for="(icon, index) in filteredIconsFaBrands"
                           xl="3">
                        <p>
                            <i :class="`fab fa-2x fa-${ icon }`"></i>
                        </p>
                        <code>{{ icon }}</code>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Font Awesome Brands -->

            <!-- Simple Line Icons -->
            <base-block :title="`(${ filteredIconsSimpleLine.length }) Simple Line Icons`" btn-option-content>
                <template #subtitle>
                    <small><code>si si-*</code></small>
                </template>
                <b-row class="items-push-2x text-center">
                    <b-col :key="`si-icon-${index}`" lg="4" sm="6" v-for="(icon, index) in filteredIconsSimpleLine"
                           xl="3">
                        <p>
                            <i :class="`si fa-2x si-${ icon }`"></i>
                        </p>
                        <code>{{ icon }}</code>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Simple Line Icons -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    // Get Icons data
    import iconsList from '@/data/icons'

    export default {
        data() {
            return {
                search: '',
                iconsFaRegular: Object.keys(iconsList.regular),
                iconsFaSolid: Object.keys(iconsList.solid),
                iconsFaBrands: Object.keys(iconsList.brands),
                iconsSimpleLine: Object.keys(iconsList.simpleline),
            }
        },
        computed: {
            filteredIconsFaRegular() {
                if (this.search) {
                    return this.iconsFaRegular.filter(icon => {
                        return icon.includes(this.search)
                    })
                } else {
                    return this.iconsFaRegular
                }
            },
            filteredIconsFaSolid() {
                if (this.search) {
                    return this.iconsFaSolid.filter(icon => {
                        return icon.includes(this.search)
                    })
                } else {
                    return this.iconsFaSolid
                }
            },
            filteredIconsFaBrands() {
                if (this.search) {
                    return this.iconsFaBrands.filter(icon => {
                        return icon.includes(this.search)
                    })
                } else {
                    return this.iconsFaBrands
                }
            },
            filteredIconsSimpleLine() {
                if (this.search) {
                    return this.iconsSimpleLine.filter(icon => {
                        return icon.includes(this.search)
                    })
                } else {
                    return this.iconsSimpleLine
                }
            }
        }
    }
</script>
