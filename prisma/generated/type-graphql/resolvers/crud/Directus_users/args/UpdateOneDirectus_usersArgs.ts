import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersUpdateInput } from "../../../inputs/Directus_usersUpdateInput";
import { Directus_usersWhereUniqueInput } from "../../../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersUpdateInput, {
    nullable: false
  })
  data!: Directus_usersUpdateInput;

  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_usersWhereUniqueInput;
}
