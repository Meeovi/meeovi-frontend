import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemOrderByRelevanceFieldEnum } from "../../enums/Order_line_itemOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_line_itemOrderByRelevanceInput", {})
export class Order_line_itemOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_line_itemOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"identifier" | "referenced_id" | "states" | "label" | "description" | "type" | "payload" | "price_definition" | "price" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
