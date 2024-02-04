import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_collectionsOrderByWithRelationAndSearchRelevanceInput";
import { Directus_collectionsWhereInput } from "../../../inputs/Directus_collectionsWhereInput";
import { Directus_collectionsWhereUniqueInput } from "../../../inputs/Directus_collectionsWhereUniqueInput";
import { Directus_collectionsScalarFieldEnum } from "../../../../enums/Directus_collectionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDirectus_collectionsOrThrowArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  where?: Directus_collectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_collectionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_collectionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"collection" | "icon" | "note" | "display_template" | "hidden" | "singleton" | "translations" | "archive_field" | "archive_app_filter" | "archive_value" | "unarchive_value" | "sort_field" | "accountability" | "color" | "item_duplication_fields" | "sort" | "group" | "collapse" | "preview_url"> | undefined;
}
