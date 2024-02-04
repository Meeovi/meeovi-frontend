import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureUpdateManyMutationInput } from "../../../inputs/Order_transaction_captureUpdateManyMutationInput";
import { Order_transaction_captureWhereInput } from "../../../inputs/Order_transaction_captureWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_transaction_captureUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  where?: Order_transaction_captureWhereInput | undefined;
}
