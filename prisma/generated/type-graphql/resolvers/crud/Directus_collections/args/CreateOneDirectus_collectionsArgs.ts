import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsCreateInput } from "../../../inputs/Directus_collectionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsCreateInput, {
    nullable: false
  })
  data!: Directus_collectionsCreateInput;
}
