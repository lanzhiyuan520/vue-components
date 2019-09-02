<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>



<style lang="scss">
 * {
   margin: 0;
   padding: 0;
 }
 ul {
   list-style: none;
 }
 .hljs {
   line-height: 1.8;
   font-family: Menlo,Monaco,Consolas,Courier,monospace;
   font-size: 12px;
   padding: 18px 24px;
   background-color: #fafafa;
   border: 1px solid #eaeefb;
   margin-bottom: 25px;
   border-radius: 4px;
 }
 .demo-block code {
   font-family: Menlo,Monaco,Consolas,Courier,monospace;
 }
 section {
   table {
     border-collapse: collapse;
     thead {
       tr {
         th:first-child {
           padding-left: 10px;
         }
         th {
           text-align: left;
           white-space: nowrap;
           color: #909399;
           font-weight: 400;
           border-bottom: 1px solid #dcdfe6;
           padding: 15px;
           max-width: 250px;
           display: table-cell;
           vertical-align: inherit;
         }
       }
     }
     tbody {
       tr {
         td:first-child {
           padding-left: 10px;
         }
         td {
           color: #606266;
           border-bottom: 1px solid #dcdfe6;
           padding: 15px;
           max-width: 250px;
         }
       }
     }

   }
   h2:hover {
     &> a {
       opacity: 1;
       color: #409eff;
     }
   }
   h3 {
     margin: 55px 0 20px;
     font-weight: 400;
     color: #1f2f3d;
   }
   h3:hover {
     &> a {
       opacity: 1;
       color: #409eff;
     }
   }
   h2 {
     font-weight: 400;
     color: #1f2f3d;
     font-size: 30px;
   }
   a {
     float: left;
     opacity: 0;
     margin-left: -20px;
   }
   p {
     font-size: 14px;
     margin: 10px 0;
     color: #5e6d82;
   }
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
