import { Grid, Rows } from "../../assets/VisualizationIcons";
import Box from '../common/Box'

interface Props{
  setVisualization: React.Dispatch<React.SetStateAction<any>>;
  visualization: boolean
}

export default function VisualizationButton(props:Props) {
  const { visualization, setVisualization } = props
  return (
    <Box
      margint="10"
      marginb="10"
      flex={"true"}
      height="50"
      align="center"
      justify="flex-end"
    >
      <Box
        height="40"
        width="40"
        marginr="10"
        border="1px solid grey"
        border_radius="25"
        flex="1"
        align="center"
        justify="space-around"
        cursor_pointer="true"
        onClick={() => setVisualization(!visualization)}
      >
        {visualization ? (
          <Box height="20" width="20">
            <Rows />
          </Box>
        ) : (
          <Box height="20" width="20">
            <Grid />
          </Box>
        )}
      </Box>
    </Box>
  )
}
