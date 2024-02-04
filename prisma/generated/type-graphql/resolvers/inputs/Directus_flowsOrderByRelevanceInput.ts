import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsOrderByRelevanceFieldEnum } from "../../enums/Directus_flowsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_flowsOrderByRelevanceInput", {})
export class Directus_flowsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Directus_flowsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name" | "icon" | "color" | "description" | "status" | "trigger" | "accountability" | "options" | "operation" | "user_created">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
