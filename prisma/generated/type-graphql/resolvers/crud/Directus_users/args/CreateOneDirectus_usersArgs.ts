import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersCreateInput } from "../../../inputs/Directus_usersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersCreateInput, {
    nullable: false
  })
  data!: Directus_usersCreateInput;
}
