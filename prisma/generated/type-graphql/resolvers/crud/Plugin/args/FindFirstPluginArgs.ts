import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PluginOrderByWithRelationAndSearchRelevanceInput";
import { PluginWhereInput } from "../../../inputs/PluginWhereInput";
import { PluginWhereUniqueInput } from "../../../inputs/PluginWhereUniqueInput";
import { PluginScalarFieldEnum } from "../../../../enums/PluginScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPluginArgs {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PluginOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PluginOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  cursor?: PluginWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PluginScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "base_class" | "composer_name" | "active" | "managed_by_composer" | "path" | "autoload" | "author" | "copyright" | "license" | "version" | "upgrade_version" | "icon" | "installed_at" | "upgraded_at" | "created_at" | "updated_at"> | undefined;
}
