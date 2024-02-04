import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesWhereUniqueInput } from "../../../inputs/Directus_rolesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_rolesWhereUniqueInput;
}
