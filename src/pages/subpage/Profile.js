import { Grid } from "@mui/material";

export default function Profile(){
    return(
        <>
        <h1 className="text-center">Profile</h1>
        <Grid container>
            <Grid item md={4}>
                <img style={{width: "100%"}} src="https://cdn.psdrepo.com/images/2x/daily-ui-032-user-profile-card-free-psd-k9.jpg" alt="" />
                <img style={{width: "100%"}} src="https://cdn.psdrepo.com/images/2x/daily-ui-032-user-profile-card-free-psd-k9.jpg" alt="" />
                <img style={{width: "100%"}} src="https://cdn.psdrepo.com/images/2x/daily-ui-032-user-profile-card-free-psd-k9.jpg" alt="" />
                <img style={{width: "100%"}} src="https://cdn.psdrepo.com/images/2x/daily-ui-032-user-profile-card-free-psd-k9.jpg" alt="" />
                <img style={{width: "100%"}} src="https://cdn.psdrepo.com/images/2x/daily-ui-032-user-profile-card-free-psd-k9.jpg" alt="" />
                <img style={{width: "100%"}} src="https://cdn.psdrepo.com/images/2x/daily-ui-032-user-profile-card-free-psd-k9.jpg" alt="" />
            </Grid>
            <Grid item md={8}>
                <img style={{width: "100%"}} src="https://assets.materialup.com/uploads/bd552b4f-7987-48d6-a815-f449410feac8/preview.png" alt="" />
                <img style={{width: "100%"}} src="https://assets.materialup.com/uploads/bd552b4f-7987-48d6-a815-f449410feac8/preview.png" alt="" />
                <img style={{width: "100%"}} src="https://assets.materialup.com/uploads/bd552b4f-7987-48d6-a815-f449410feac8/preview.png" alt="" />

            </Grid>
        </Grid>
        </>
    )
}