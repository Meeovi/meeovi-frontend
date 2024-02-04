import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureOrderByWithAggregationInput } from "../../../inputs/Adyen_payment_captureOrderByWithAggregationInput";
import { Adyen_payment_captureScalarWhereWithAggregatesInput } from "../../../inputs/Adyen_payment_captureScalarWhereWithAggregatesInput";
import { Adyen_payment_captureWhereInput } from "../../../inputs/Adyen_payment_captureWhereInput";
import { Adyen_payment_captureScalarFieldEnum } from "../../../../enums/Adyen_payment_captureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_captureOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Adyen_payment_captureOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_captureScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "order_transaction_id" | "psp_reference" | "source" | "status" | "created_at" | "updated_at" | "amount">;

  @TypeGraphQL.Field(_type => Adyen_payment_captureScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Adyen_payment_captureScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
