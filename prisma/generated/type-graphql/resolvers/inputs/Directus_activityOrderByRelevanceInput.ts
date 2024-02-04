import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_activityOrderByRelevanceFieldEnum } from "../../enums/Directus_activityOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_activityOrderByRelevanceInput", {})
export class Directus_activityOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_activityOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"action" | "user" | "ip" | "user_agent" | "collection" | "item" | "comment" | "origin">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
