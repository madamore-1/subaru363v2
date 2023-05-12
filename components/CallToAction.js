import styles from './calltoaction.module.scss';
import Container from './Container';
import Heading from './Heading';
import Paragraph from './Paragraph'
import  Button  from './Button';
import ButtonGroup from './ButtonGroup';

const CallToAction = ({vehicleName}) => {
    return <section className={styles.calltoaction}>
       <Container>
        <div className={styles.calltoaction_flexbox}>
        <Heading level={2}>Get behind the wheel</Heading>
        <Paragraph > <strong>Start customizing your {vehicleName} today, 
            or contact your local Subaru dealer to expirience one in person</strong>
            </Paragraph>
            <ButtonGroup>
                <Button label="Build & Price" type='primary'/>
                <Button label="Contact dealer" type='secondary'/>
            </ButtonGroup>
            </div>
        </Container>
        </section>
}
export default CallToAction 