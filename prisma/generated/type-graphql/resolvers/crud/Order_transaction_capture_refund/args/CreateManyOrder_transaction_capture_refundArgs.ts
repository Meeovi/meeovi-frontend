import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundCreateManyInput } from "../../../inputs/Order_transaction_capture_refundCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_transaction_capture_refundArgs {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundCreateManyInput], {
    nullable: false
  })
  data!: Order_transaction_capture_refundCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
