import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentOrderByRelevanceFieldEnum } from "../../enums/Adyen_paymentOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_paymentOrderByRelevanceInput", {})
export class Adyen_paymentOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Adyen_paymentOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"pspreference" | "original_reference" | "merchant_reference" | "merchant_order_reference" | "payment_method" | "amount_currency" | "additional_data" | "capture_mode">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
