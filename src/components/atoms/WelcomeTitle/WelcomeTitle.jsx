import "./WelcomeTitle.css"

export default function WelcomeTitle ( { firstname } ) 
{
  return (
    <>
      <h1 className="welcomeTitle">
        Bonjour&nbsp;
        <span className="welcomeTitle__firstname">
          { firstname }
        </span>
      </h1>
    </>
    )
}
