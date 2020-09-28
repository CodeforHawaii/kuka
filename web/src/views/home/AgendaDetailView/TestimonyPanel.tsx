import React from 'react';
import { Typography } from "@material-ui/core";
import { AgendaItem } from "../../../types/agendaItem";
import { makeStyles, Grid } from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { testimonyRef } from "../../../services/Testimony";
import TestimonyCard from "../../../components/TestimonyCard";
import { Testimony } from "../../../types/testimony";

interface AgendaPanelProps {
  agendaItem: AgendaItem;
}

const useStyles = makeStyles((theme) => ({
  root: {

  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));


function TestimonyPanel({ agendaItem }: AgendaPanelProps){
  const classes = useStyles();

  const [testimonies, loading, error] = useCollectionData<Testimony>(
    testimonyRef
      .where('agendaId', '==', agendaItem.id),
    {
      idField: 'id',
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant={"h2"}>
        Testimonies
      </Typography>

      <Grid container>
        {error && <div>error</div>}
        {loading && <div>loading</div>}
        {testimonies && testimonies.map((testimony) => (
          <Grid item xs={6} md={3} key={testimony.id} >
            <TestimonyCard testimony={testimony} />
          </Grid>
        ))}
        {testimonies && testimonies.length === 0 && (
          <div>no testimonies found.</div>
        )}

      </Grid>
    </div>
  )
}

export default TestimonyPanel;
