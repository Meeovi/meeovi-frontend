import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundOrderByRelevanceFieldEnum } from "../../enums/Order_transaction_capture_refundOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_capture_refundOrderByRelevanceInput", {})
export class Order_transaction_capture_refundOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"reason" | "amount" | "custom_fields" | "external_reference">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
