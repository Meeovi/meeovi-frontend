import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsOrderByWithAggregationInput } from "../../../inputs/Directus_collectionsOrderByWithAggregationInput";
import { Directus_collectionsScalarWhereWithAggregatesInput } from "../../../inputs/Directus_collectionsScalarWhereWithAggregatesInput";
import { Directus_collectionsWhereInput } from "../../../inputs/Directus_collectionsWhereInput";
import { Directus_collectionsScalarFieldEnum } from "../../../../enums/Directus_collectionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  where?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_collectionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"collection" | "icon" | "note" | "display_template" | "hidden" | "singleton" | "translations" | "archive_field" | "archive_app_filter" | "archive_value" | "unarchive_value" | "sort_field" | "accountability" | "color" | "item_duplication_fields" | "sort" | "group" | "collapse" | "preview_url">;

  @TypeGraphQL.Field(_type => Directus_collectionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_collectionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
