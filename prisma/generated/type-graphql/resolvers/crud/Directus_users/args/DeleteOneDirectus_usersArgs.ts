import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersWhereUniqueInput } from "../../../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_usersWhereUniqueInput;
}
