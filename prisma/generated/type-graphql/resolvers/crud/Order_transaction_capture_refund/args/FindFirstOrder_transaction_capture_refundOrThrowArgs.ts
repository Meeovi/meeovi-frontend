import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_capture_refundWhereInput } from "../../../inputs/Order_transaction_capture_refundWhereInput";
import { Order_transaction_capture_refundWhereUniqueInput } from "../../../inputs/Order_transaction_capture_refundWhereUniqueInput";
import { Order_transaction_capture_refundScalarFieldEnum } from "../../../../enums/Order_transaction_capture_refundScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrder_transaction_capture_refundOrThrowArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_transaction_capture_refundWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "capture_id" | "capture_version_id" | "state_id" | "reason" | "amount" | "custom_fields" | "external_reference" | "created_at" | "updated_at"> | undefined;
}
