import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesUpdateInput } from "../../../inputs/Directus_rolesUpdateInput";
import { Directus_rolesWhereUniqueInput } from "../../../inputs/Directus_rolesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesUpdateInput, {
    nullable: false
  })
  data!: Directus_rolesUpdateInput;

  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_rolesWhereUniqueInput;
}
