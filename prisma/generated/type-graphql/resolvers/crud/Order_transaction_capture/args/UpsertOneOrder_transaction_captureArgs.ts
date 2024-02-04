import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureCreateInput } from "../../../inputs/Order_transaction_captureCreateInput";
import { Order_transaction_captureUpdateInput } from "../../../inputs/Order_transaction_captureUpdateInput";
import { Order_transaction_captureWhereUniqueInput } from "../../../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_captureWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateInput, {
    nullable: false
  })
  create!: Order_transaction_captureCreateInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateInput, {
    nullable: false
  })
  update!: Order_transaction_captureUpdateInput;
}
