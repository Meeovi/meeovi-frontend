import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionCreateManyInput } from "../../../inputs/Order_transaction_capture_refund_positionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateManyInput], {
    nullable: false
  })
  data!: Order_transaction_capture_refund_positionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
