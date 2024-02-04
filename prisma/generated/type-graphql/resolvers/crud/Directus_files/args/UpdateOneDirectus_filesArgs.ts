import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesUpdateInput } from "../../../inputs/Directus_filesUpdateInput";
import { Directus_filesWhereUniqueInput } from "../../../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesUpdateInput, {
    nullable: false
  })
  data!: Directus_filesUpdateInput;

  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;
}
