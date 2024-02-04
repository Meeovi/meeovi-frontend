import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_transactionOrderByWithRelationAndSearchRelevanceInput";
import { Order_transactionWhereInput } from "../../../inputs/Order_transactionWhereInput";
import { Order_transactionWhereUniqueInput } from "../../../inputs/Order_transactionWhereUniqueInput";
import { Order_transactionScalarFieldEnum } from "../../../../enums/Order_transactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_transactionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_transactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "order_id" | "order_version_id" | "state_id" | "payment_method_id" | "amount" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
