import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionOrderByRelevanceFieldEnum } from "../../enums/Order_transaction_capture_refund_positionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionOrderByRelevanceInput", {})
export class Order_transaction_capture_refund_positionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"reason" | "external_reference" | "amount" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
