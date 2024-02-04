import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsOrderByRelevanceFieldEnum } from "../../enums/Directus_collectionsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_collectionsOrderByRelevanceInput", {})
export class Directus_collectionsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_collectionsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"collection" | "icon" | "note" | "display_template" | "translations" | "archive_field" | "archive_value" | "unarchive_value" | "sort_field" | "accountability" | "color" | "item_duplication_fields" | "group" | "collapse" | "preview_url">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
