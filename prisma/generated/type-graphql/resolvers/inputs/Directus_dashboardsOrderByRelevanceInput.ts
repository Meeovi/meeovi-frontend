import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsOrderByRelevanceFieldEnum } from "../../enums/Directus_dashboardsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_dashboardsOrderByRelevanceInput", {})
export class Directus_dashboardsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_dashboardsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name" | "icon" | "note" | "user_created" | "color">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
