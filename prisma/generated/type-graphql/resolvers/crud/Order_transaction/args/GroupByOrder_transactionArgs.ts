import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionOrderByWithAggregationInput } from "../../../inputs/Order_transactionOrderByWithAggregationInput";
import { Order_transactionScalarWhereWithAggregatesInput } from "../../../inputs/Order_transactionScalarWhereWithAggregatesInput";
import { Order_transactionWhereInput } from "../../../inputs/Order_transactionWhereInput";
import { Order_transactionScalarFieldEnum } from "../../../../enums/Order_transactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_transactionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "order_id" | "order_version_id" | "state_id" | "payment_method_id" | "amount" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_transactionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_transactionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
