import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartOrderByRelevanceFieldEnum } from "../../enums/CartOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CartOrderByRelevanceInput", {})
export class CartOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CartOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"token" | "name" | "cart" | "line_item_count" | "rule_ids">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
