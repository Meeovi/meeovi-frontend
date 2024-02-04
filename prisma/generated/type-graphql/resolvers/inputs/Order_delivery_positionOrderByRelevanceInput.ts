import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionOrderByRelevanceFieldEnum } from "../../enums/Order_delivery_positionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_delivery_positionOrderByRelevanceInput", {})
export class Order_delivery_positionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_delivery_positionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"price" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
