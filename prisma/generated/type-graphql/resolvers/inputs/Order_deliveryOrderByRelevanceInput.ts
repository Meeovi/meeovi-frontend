import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryOrderByRelevanceFieldEnum } from "../../enums/Order_deliveryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_deliveryOrderByRelevanceInput", {})
export class Order_deliveryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_deliveryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"tracking_codes" | "shipping_costs" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
