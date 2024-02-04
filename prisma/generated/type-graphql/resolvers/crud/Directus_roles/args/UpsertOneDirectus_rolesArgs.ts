import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesCreateInput } from "../../../inputs/Directus_rolesCreateInput";
import { Directus_rolesUpdateInput } from "../../../inputs/Directus_rolesUpdateInput";
import { Directus_rolesWhereUniqueInput } from "../../../inputs/Directus_rolesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_rolesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_rolesCreateInput, {
    nullable: false
  })
  create!: Directus_rolesCreateInput;

  @TypeGraphQL.Field(_type => Directus_rolesUpdateInput, {
    nullable: false
  })
  update!: Directus_rolesUpdateInput;
}
