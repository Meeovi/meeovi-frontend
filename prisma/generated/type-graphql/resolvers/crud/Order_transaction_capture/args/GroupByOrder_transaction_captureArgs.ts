import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureOrderByWithAggregationInput } from "../../../inputs/Order_transaction_captureOrderByWithAggregationInput";
import { Order_transaction_captureScalarWhereWithAggregatesInput } from "../../../inputs/Order_transaction_captureScalarWhereWithAggregatesInput";
import { Order_transaction_captureWhereInput } from "../../../inputs/Order_transaction_captureWhereInput";
import { Order_transaction_captureScalarFieldEnum } from "../../../../enums/Order_transaction_captureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  where?: Order_transaction_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_transaction_captureOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "order_transaction_id" | "order_transaction_version_id" | "state_id" | "external_reference" | "amount" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_transaction_captureScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_transaction_captureScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
