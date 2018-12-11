import BaseComponent from "./Hero"
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_HERO_IMAGE = gql`
    {
        entry(section:homepage, limit:1) {
            ...on Homepage{
                heroImage{
                    url
                    title
                }
            }
        }
    }
`

const Component = () => <Query query={GET_HERO_IMAGE}>
    {({loading, error, data}) => {
        if (loading) return "Loading..."
        if (error) return "Error!"

        return <BaseComponent image={data.entry.heroImage[0]}/>
    }}
</Query>

export default Component