import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryWhereUniqueInput } from "../../../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;
}
