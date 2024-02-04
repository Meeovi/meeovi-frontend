import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionOrderByRelevanceFieldEnum } from "../../enums/Klarna_order_extensionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klarna_order_extensionOrderByRelevanceInput", {})
export class Klarna_order_extensionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Klarna_order_extensionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"order_address_hash" | "order_cart_hash">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
