import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionCreateManyInput } from "../../../inputs/Order_transactionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_transactionArgs {
  @TypeGraphQL.Field(_type => [Order_transactionCreateManyInput], {
    nullable: false
  })
  data!: Order_transactionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
