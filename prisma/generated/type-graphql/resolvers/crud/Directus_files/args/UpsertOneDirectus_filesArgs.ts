import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesCreateInput } from "../../../inputs/Directus_filesCreateInput";
import { Directus_filesUpdateInput } from "../../../inputs/Directus_filesUpdateInput";
import { Directus_filesWhereUniqueInput } from "../../../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_filesCreateInput, {
    nullable: false
  })
  create!: Directus_filesCreateInput;

  @TypeGraphQL.Field(_type => Directus_filesUpdateInput, {
    nullable: false
  })
  update!: Directus_filesUpdateInput;
}
