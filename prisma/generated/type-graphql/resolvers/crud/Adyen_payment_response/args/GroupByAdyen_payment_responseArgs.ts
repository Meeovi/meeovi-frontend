import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_responseOrderByWithAggregationInput } from "../../../inputs/Adyen_payment_responseOrderByWithAggregationInput";
import { Adyen_payment_responseScalarWhereWithAggregatesInput } from "../../../inputs/Adyen_payment_responseScalarWhereWithAggregatesInput";
import { Adyen_payment_responseWhereInput } from "../../../inputs/Adyen_payment_responseWhereInput";
import { Adyen_payment_responseScalarFieldEnum } from "../../../../enums/Adyen_payment_responseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdyen_payment_responseArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_responseWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_responseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Adyen_payment_responseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_responseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "order_transaction_id" | "result_code" | "response" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Adyen_payment_responseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Adyen_payment_responseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
