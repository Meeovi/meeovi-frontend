import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeOrderByWithAggregationInput } from "../../../inputs/ThemeOrderByWithAggregationInput";
import { ThemeScalarWhereWithAggregatesInput } from "../../../inputs/ThemeScalarWhereWithAggregatesInput";
import { ThemeWhereInput } from "../../../inputs/ThemeWhereInput";
import { ThemeScalarFieldEnum } from "../../../../enums/ThemeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThemeArgs {
  @TypeGraphQL.Field(_type => ThemeWhereInput, {
    nullable: true
  })
  where?: ThemeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThemeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThemeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "name" | "author" | "preview_media_id" | "parent_theme_id" | "base_config" | "config_values" | "active" | "created_at" | "updated_at" | "theme_json">;

  @TypeGraphQL.Field(_type => ThemeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThemeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
