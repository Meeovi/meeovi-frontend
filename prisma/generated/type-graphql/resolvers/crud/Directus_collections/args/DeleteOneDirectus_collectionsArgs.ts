import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsWhereUniqueInput } from "../../../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_collectionsWhereUniqueInput;
}
