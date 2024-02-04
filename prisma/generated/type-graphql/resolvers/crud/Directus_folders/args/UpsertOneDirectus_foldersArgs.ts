import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersCreateInput } from "../../../inputs/Directus_foldersCreateInput";
import { Directus_foldersUpdateInput } from "../../../inputs/Directus_foldersUpdateInput";
import { Directus_foldersWhereUniqueInput } from "../../../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_foldersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_foldersCreateInput, {
    nullable: false
  })
  create!: Directus_foldersCreateInput;

  @TypeGraphQL.Field(_type => Directus_foldersUpdateInput, {
    nullable: false
  })
  update!: Directus_foldersUpdateInput;
}
