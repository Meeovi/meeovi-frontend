import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentOrderByWithAggregationInput } from "../../../inputs/Adyen_paymentOrderByWithAggregationInput";
import { Adyen_paymentScalarWhereWithAggregatesInput } from "../../../inputs/Adyen_paymentScalarWhereWithAggregatesInput";
import { Adyen_paymentWhereInput } from "../../../inputs/Adyen_paymentWhereInput";
import { Adyen_paymentScalarFieldEnum } from "../../../../enums/Adyen_paymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereInput, {
    nullable: true
  })
  where?: Adyen_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Adyen_paymentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pspreference" | "original_reference" | "merchant_reference" | "merchant_order_reference" | "order_transaction_id" | "payment_method" | "amount_value" | "amount_currency" | "additional_data" | "capture_mode" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Adyen_paymentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Adyen_paymentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
