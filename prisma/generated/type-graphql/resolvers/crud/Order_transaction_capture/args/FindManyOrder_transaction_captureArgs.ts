import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_captureWhereInput } from "../../../inputs/Order_transaction_captureWhereInput";
import { Order_transaction_captureWhereUniqueInput } from "../../../inputs/Order_transaction_captureWhereUniqueInput";
import { Order_transaction_captureScalarFieldEnum } from "../../../../enums/Order_transaction_captureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  where?: Order_transaction_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_transaction_captureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "order_transaction_id" | "order_transaction_version_id" | "state_id" | "external_reference" | "amount" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
