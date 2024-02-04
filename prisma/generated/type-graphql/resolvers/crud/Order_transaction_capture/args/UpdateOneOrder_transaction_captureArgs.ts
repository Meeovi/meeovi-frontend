import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureUpdateInput } from "../../../inputs/Order_transaction_captureUpdateInput";
import { Order_transaction_captureWhereUniqueInput } from "../../../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateInput, {
    nullable: false
  })
  data!: Order_transaction_captureUpdateInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_captureWhereUniqueInput;
}
