import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ThemeOrderByWithRelationAndSearchRelevanceInput";
import { ThemeWhereInput } from "../../../inputs/ThemeWhereInput";
import { ThemeWhereUniqueInput } from "../../../inputs/ThemeWhereUniqueInput";
import { ThemeScalarFieldEnum } from "../../../../enums/ThemeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstThemeArgs {
  @TypeGraphQL.Field(_type => ThemeWhereInput, {
    nullable: true
  })
  where?: ThemeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThemeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ThemeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ThemeWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThemeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ThemeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "name" | "author" | "preview_media_id" | "parent_theme_id" | "base_config" | "config_values" | "active" | "created_at" | "updated_at" | "theme_json"> | undefined;
}
