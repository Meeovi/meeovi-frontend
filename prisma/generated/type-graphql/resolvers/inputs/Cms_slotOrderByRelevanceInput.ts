import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotOrderByRelevanceFieldEnum } from "../../enums/Cms_slotOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_slotOrderByRelevanceInput", {})
export class Cms_slotOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Cms_slotOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type" | "slot">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
