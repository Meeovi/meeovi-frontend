import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationOrderByRelevanceFieldEnum } from "../../enums/Plugin_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Plugin_translationOrderByRelevanceInput", {})
export class Plugin_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Plugin_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"label" | "description" | "manufacturer_link" | "support_link" | "changelog" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
