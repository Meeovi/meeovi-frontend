import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersCreateInput } from "../../../inputs/Directus_usersCreateInput";
import { Directus_usersUpdateInput } from "../../../inputs/Directus_usersUpdateInput";
import { Directus_usersWhereUniqueInput } from "../../../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_usersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_usersCreateInput, {
    nullable: false
  })
  create!: Directus_usersCreateInput;

  @TypeGraphQL.Field(_type => Directus_usersUpdateInput, {
    nullable: false
  })
  update!: Directus_usersUpdateInput;
}
