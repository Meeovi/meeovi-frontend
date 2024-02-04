import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesCreateInput } from "../../../inputs/Directus_rolesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesCreateInput, {
    nullable: false
  })
  data!: Directus_rolesCreateInput;
}
