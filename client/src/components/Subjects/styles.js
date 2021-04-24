import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
      border: {
            border: 'solid',
      },
      fullHeightCard: {
            height: '100%',
      },
      card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative',
      },
      overlay: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
      },
      overlay2: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'white',
      },
      grid: {
            display: 'flex',
            flexDiection: 'column',
            justifyContent: 'space-between'
      },
      details: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
      },
      title: {
            padding: '0 16px',
            margin: '1rem'
      },
      cardActions: {
            padding: '0 16px 8px 16px',
            display: 'flex',
            justifyContent: 'space-between',
      },
      subjectActionContainer: {
            display: 'flex'
      }
});