import Card from 'react-bootstrap/Card';


export const EventItem = () => {
  return (
    <>
    <div className='ItemsConciertos'>
        <Card.Text
        style=
        {
          {
            'padding-right': '0px',
            'display': 'flex',
            'margin': '0',
            'padding' : '20px',
            'paddingRight' : '0'
          }
        }>
          <h1>12</h1>
          <Card.Text
            style=
            {
              {
                'margin': '0',
                'padding-left': '1px',
                'paddingTop' : '21px'
              }
            }
            >
          <h6>nov</h6>
        </Card.Text>
        </Card.Text>
        <Card.Text
        style={{
          'margin-bottom': '4px',
          'paddingInline' : '0px'
        }}>
          <h6>Bogotá</h6>
        </Card.Text>

        <Card.Text
        style={{
          'padding-right': '0px',
          'padding-left': '0px',
          'margin-bottom': '0px'
        }}
        >
          <h6 style={{'font-weight': '400'}}>Cll 45 # 30 - 00</h6>
          <Card.Link href="#">Ver en el mapa</Card.Link>
        </Card.Text>
        <Card.Link className='Notificarme' href="#" style={{'font-weight': '300'}}>Notificarme</Card.Link>
        </div>
        <h1 className='titleLine'></h1>
    </>
  )
}
