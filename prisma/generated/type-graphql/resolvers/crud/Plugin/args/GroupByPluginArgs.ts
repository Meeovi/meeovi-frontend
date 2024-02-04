import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginOrderByWithAggregationInput } from "../../../inputs/PluginOrderByWithAggregationInput";
import { PluginScalarWhereWithAggregatesInput } from "../../../inputs/PluginScalarWhereWithAggregatesInput";
import { PluginWhereInput } from "../../../inputs/PluginWhereInput";
import { PluginScalarFieldEnum } from "../../../../enums/PluginScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPluginArgs {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PluginOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PluginOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PluginScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "base_class" | "composer_name" | "active" | "managed_by_composer" | "path" | "autoload" | "author" | "copyright" | "license" | "version" | "upgrade_version" | "icon" | "installed_at" | "upgraded_at" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => PluginScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PluginScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
