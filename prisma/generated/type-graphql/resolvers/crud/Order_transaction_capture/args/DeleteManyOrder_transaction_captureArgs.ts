import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureWhereInput } from "../../../inputs/Order_transaction_captureWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  where?: Order_transaction_captureWhereInput | undefined;
}
