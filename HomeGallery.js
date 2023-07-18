import React, { useState } from 'react'
import axios from 'axios'
import {
  Card,
  TextField,
  CardContent,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ethers } from 'ethers'
const useStyles = makeStyles({
  card: {
    width: 500,
    margin: '0 20px',
    border: '1px solid #bdbbbb',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: '1rem',
    width: '100%',
  },
  button: {
    width: '100%',
  },
})

function HomeGallery({
  delegateDeployerContract,
  delegateProjectDeployerContract,
  dominantJuiceContract,
  juiceContract,
  wallet,
}) {
  const classes = useStyles()
  const [cycleTarget, setCycleTarget] = useState('')
  const [pledgeAmount, setPledgeAmount] = useState('')
  const [earlyPledgers, setEarlyPledgers] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [description, setDescription] = useState()
  const [image, setImage] = useState('')
  const owner = wallet
  const _ipfsCID = '0'
  const startTime = 1689681600 // convert time numb
  const duration = 1800 // 30mminutes convert time numb
  const [transaction, setTransaction] = useState(false)
  const [projectId, setProjectId] = useState('')

  // const [cycleTarget, setCycleTarget] = useState(0.000001)
  // const [pledgeAmount, setPledgeAmount] = useState(0.000001)
  // const [earlyPledgers, setEarlyPledgers] = useState(2)
  // const [projectTitle, setProjectTitle] = useState('My First Title')
  // const [description, setDescription] = useState('This is my description for My First Title This is my description for My First Title This is my description for My First Title This is my description for My First TitleThis is my description for My First Title This is my description for My First Title  ')
  // const [image, setImage] = useState('')
  // const owner = wallet
  // const _ipfsCID = '0'
  // const startTime = 1689681600 // convert time numb
  // const duration = 1800 // 30mminutes convert time numb

  // Fix these funtion
  const deposit = async (event) => {
    if (dominantJuiceContract)
      try {
        const refundBonusAmount = 1 //tied to projectID 0x97B4a77b8CAD36e2b4E9B85D6Cd3eB6692Be8356
        const refundAmountConverted = ethers.utils.parseEther(
          refundBonusAmount.toString(),
        )
        const tx = await dominantJuiceContract.depositRefundBonus(
          refundAmountConverted,
        )
        const receipt = await tx.wait()
        console.log('___receipt:', receipt)
      } catch (error) {
        console.log(error)
      }
  }

  const getCycleResults = async () => {
    if (dominantJuiceContract)
      try {
        const transaction = await dominantJuiceContract.relayCycleResults()
        console.log('transaction:', transaction)
      } catch (error) {
        console.log('error:', error)
      }
  }

  const creatorWithdraw = async () => {
    if (dominantJuiceContract)
      try {
        const receivingAddress = wallet
        const amount = pledgeAmount
        const transaction = await dominantJuiceContract.creatorWithdraw(
          receivingAddress,
          amount,
        )
        console.log('transaction:', transaction)
        // If campaign has failed, this function call will revert
      } catch (error) {
        console.log('error:', error)
      }
  }
  const getProjectAddress = async () => {
    const projectId = 1149
    if (delegateDeployerContract && projectId)
      try {
        const transaction = await delegateDeployerContract.getDelegateOfProject(
          projectId,
        )
        console.log('transaction:', transaction)
      } catch (error) {
        console.log('error:', error)
      }
  }

  const launchProject = async (e) => {
    e.preventDefault()
    const cycleTargetConverted = ethers.utils.parseEther(cycleTarget.toString())
    const pledgeAmountConverted = ethers.utils.parseEther(
      pledgeAmount.toString(),
    )
    if (delegateProjectDeployerContract)
      try {
        const tx = await delegateProjectDeployerContract.launchProjectFor(
          owner,
          _ipfsCID,
          cycleTargetConverted,
          startTime,
          duration,
          pledgeAmountConverted,
          earlyPledgers,
        )
        console.log('______launchProject ~ tx:', tx)
        const getCountFromJuiceContract = await juiceContract.count()
        const projectId = Number(getCountFromJuiceContract) + Number(1)
        setProjectId(projectId)
        setTransaction(true)
      } catch (error) {
        console.log('error:', error)
      }
  }

  const handleChange = async (event) => {
    const inputData = new FormData()
    inputData.append('file', event.target.files[0])
    const res = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      inputData,
      {
        maxContentLength: 'Infinity',
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: '2f7a99fef33b2783bde7',
          pinata_secret_api_key:
            '9082e887ce9262fcf525cd85b5a0da348a5b1fc3fb725bacdd5af3d80a051d5c',
        },
      },
    )
    setImage('https://gateway.pinata.cloud/ipfs/' + res.data.IpfsHash)
  }

  return (
    <div
      style={{
        minHeight: '60vh',
        paddingBottom: '4rem',
        paddingTop: '5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* <Button onClick={deposit} >deposit</Button>
      <Button onClick={getProjectAddress} >getProjectAddress</Button>
      <Button onClick={getCycleResults} >getCycleResults</Button> */}

      {/* {!transaction && (
        <Card className={classes.card}>
          <h2 align="center" style={{ paddingTop: '1.5rem' }}>
            Launch Project and Initialize Dominant Assurance Contract
          </h2>
          <br />
          <CardContent>
            <form className={classes.form} noValidate autoComplete="off">
              <img
                src={image ? image : '/Rectangle77.png'}
                style={{
                  width: '150px',
                  top: '0',
                  left: '0',
                }}
                alt="preview"
              />
              <label htmlFor="formFileImage5">+ Upload</label>
              <input
                type="file"
                id="formFileImage5"
                onChange={handleChange}
                defaultValue={image}
                style={{ display: 'none' }}
                required
              />
              <br />

              <TextField
                className={classes.textField}
                label="Project Title"
                variant="outlined"
                defaultValue={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />

              <p>
                <label htmlFor="w3review">Description</label>
              </p>
              <textarea
                className="create-profile-input"
                type="text"
                id="description"
                name="description"
                rows="3"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br />

              <TextField
                className={classes.textField}
                label="cycle target"
                variant="outlined"
                defaultValue={cycleTarget}
                onChange={(e) => setCycleTarget(e.target.value)}
              />
              <br />

              <TextField
                className={classes.textField}
                label="minimum pledge amount"
                variant="outlined"
                defaultValue={pledgeAmount}
                onChange={(e) => setPledgeAmount(e.target.value)}
              />
              <br />

              <TextField
                className={classes.textField}
                label="max early pledgers"
                variant="outlined"
                defaultValue={earlyPledgers}
                onChange={(e) => setEarlyPledgers(e.target.value)}
              />
              <br />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                style={{ textTransform: 'capitalize' }}
                onClick={launchProject}
              >
                Launch Project and Initialize Dominant Assurance
              </Button>
              <br />
              <br />
            </form>
          </CardContent>
        </Card>
      )} */}

<Card className={classes.card}>
          <h2 align="center" style={{ paddingTop: '1.5rem' }}>
            Launch Project and Initialize Dominant Assurance Contract
          </h2>
          <br />
          <CardContent>
            <form className={classes.form} noValidate autoComplete="off">
              <img
                src={image ? image : '/Rectangle77.png'}
                style={{
                  width: '150px',
                  top: '0',
                  left: '0',
                }}
                alt="preview"
              />
              <label htmlFor="formFileImage5">+ Upload</label>
              <input
                type="file"
                id="formFileImage5"
                onChange={handleChange}
                defaultValue={image}
                style={{ display: 'none' }}
                required
              />
              <br />

              <TextField
                className={classes.textField}
                label="Project Title"
                variant="outlined"
                defaultValue={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />

              <p>
                <label htmlFor="w3review">Description</label>
              </p>
              <textarea
                className="create-profile-input"
                type="text"
                id="description"
                name="description"
                rows="3"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br />

              <TextField
                className={classes.textField}
                label="cycle target"
                variant="outlined"
                defaultValue={cycleTarget}
                onChange={(e) => setCycleTarget(e.target.value)}
              />
              <br />

              <TextField
                className={classes.textField}
                label="minimum pledge amount"
                variant="outlined"
                defaultValue={pledgeAmount}
                onChange={(e) => setPledgeAmount(e.target.value)}
              />
              <br />

              <TextField
                className={classes.textField}
                label="max early pledgers"
                variant="outlined"
                defaultValue={earlyPledgers}
                onChange={(e) => setEarlyPledgers(e.target.value)}
              />
              <br />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                style={{ textTransform: 'capitalize' }}
                onClick={launchProject}
              >
                Launch Project and Initialize Dominant Assurance
              </Button>
              <br />
              <br />
            </form>
          </CardContent>
        </Card>

      {transaction ? (
        <Card className={classes.card}>
          <h2 align="center" style={{ paddingTop: '1.5rem', color: 'gray' }}>
            Project Details
          </h2>
          <CardContent>
            <h2
              align="center"
              style={{ paddingTop: '.5em', textTransform: 'capitalize' }}
            >
              {' '}
              {projectTitle}{' '}
            </h2>
            <p style={{ paddingTop: '1em' }}> {description} </p>
            <img
              src={image ? image : '/project.png'}
              style={{ width: '100%', paddingTop: '1em' }}
              alt="projectImage"
            />
            <p style={{ paddingTop: '1em' }}>
              <strong>Cycle target: </strong>
              {cycleTarget}{' '}
            </p>
            <p style={{ paddingTop: '1em' }}>
              <strong>Pledge amount: </strong>
              {pledgeAmount}{' '}
            </p>
            <p style={{ paddingTop: '1em' }}>
              <strong>Early pledgers: </strong>
              {earlyPledgers}{' '}
            </p>
            <p style={{ paddingTop: '1em' }}>
              <strong>Owner: </strong>
              {owner}{' '}
            </p>
            <p style={{ paddingTop: '1em' }}>
              <strong>Duration: </strong>
              {duration}{' '}
            </p>
            <p style={{ paddingTop: '1em' }}>
              <strong>Start time: </strong>
              {startTime}{' '}
            </p>
          </CardContent>

          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              style={{ textTransform: 'capitalize' }}
              onClick={deposit}
            >
              Deposit
            </Button>
            <br />

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              style={{ textTransform: 'capitalize' }}
              onClick={getProjectAddress}
            >
              Get Project Address
            </Button>
            <br />

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              style={{ textTransform: 'capitalize' }}
              onClick={getCycleResults}
            >
              Get Cycle Results
            </Button>
            <br />
          

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              style={{ textTransform: 'capitalize' }}
              onClick={creatorWithdraw}
            >
              Creator Withdraw
            </Button>
            <br />
          </div>
        </Card>
      ) : (
        ''
      )}
    </div>
  )
}

export default HomeGallery
