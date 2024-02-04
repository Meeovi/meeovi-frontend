import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureCreateManyInput } from "../../../inputs/Order_transaction_captureCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateManyInput], {
    nullable: false
  })
  data!: Order_transaction_captureCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
