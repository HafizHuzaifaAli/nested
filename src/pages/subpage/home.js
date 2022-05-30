import { Grid, Typography } from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useLocation } from "react-router-dom";

export default function Home(props){
    const location = useLocation()
    return(
        <Grid container>
            <Grid item sm={12} md={8}>
               <Typography variant="h3" align="center" sx={{backgroundColor: "cyan"}}>
                   Hello! {location.state}
               </Typography>
               <Grid container>
                   <Grid item md={3}>
                        <div className="text-center shadow p-4 text-secondary fw-bold">
                         <TrendingDownIcon />   sales 22$
                        </div>
                   </Grid>
                   <Grid item md={3}>
                   <div className="text-center shadow p-4 text-secondary fw-bold">
                   <TrendingDownIcon />   edit 3
                        </div>
                   </Grid>
                   <Grid item md={3}>
                   <div className="text-center shadow p-4 text-secondary fw-bold">
                         <TrendingDownIcon />   view 1000
                        </div>
                   </Grid>
                   <Grid item md={3}>
                   <div className="text-center shadow p-4 text-secondary fw-bold">
                          <TrendingDownIcon />  product 200
                        </div>
                   </Grid>
               </Grid>
               <Grid container><img style={{width: "100%" ,padding: "0,20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLzc-EOElqb-EgGyWVTVqore5p5JyfR3QzA&usqp=CAU" alt="" /></Grid>
            </Grid>
            <Grid item sm={12} md={4}>
               <img style={{width: "100%"}} src="https://www.researchgate.net/profile/Shaneworn-Bhadra/publication/342215873/figure/fig1/AS:903149141389313@1592338943641/Figure-1C-Advantages-of-Pie-Chart-Graph-can-be-created-proportionally-to-the.png" alt="" />
                <Grid container><img style={{width: "100%"}} src="https://cdn.vertex42.com/ExcelTemplates/Images/calendar-chart-example-excel.png" alt="" /></Grid>
            </Grid>
        </Grid>
    )
}