import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundOrderByWithAggregationInput } from "../../../inputs/Adyen_refundOrderByWithAggregationInput";
import { Adyen_refundScalarWhereWithAggregatesInput } from "../../../inputs/Adyen_refundScalarWhereWithAggregatesInput";
import { Adyen_refundWhereInput } from "../../../inputs/Adyen_refundWhereInput";
import { Adyen_refundScalarFieldEnum } from "../../../../enums/Adyen_refundScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  where?: Adyen_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Adyen_refundOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "order_transaction_id" | "psp_reference" | "source" | "status" | "created_at" | "updated_at" | "amount">;

  @TypeGraphQL.Field(_type => Adyen_refundScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Adyen_refundScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
