import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionWhereUniqueInput } from "../../../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_delivery_positionWhereUniqueInput;
}
