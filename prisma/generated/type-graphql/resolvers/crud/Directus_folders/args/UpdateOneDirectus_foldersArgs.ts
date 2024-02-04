import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersUpdateInput } from "../../../inputs/Directus_foldersUpdateInput";
import { Directus_foldersWhereUniqueInput } from "../../../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersUpdateInput, {
    nullable: false
  })
  data!: Directus_foldersUpdateInput;

  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_foldersWhereUniqueInput;
}
