import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryWhereInput } from "../../../inputs/Order_deliveryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  where?: Order_deliveryWhereInput | undefined;
}
