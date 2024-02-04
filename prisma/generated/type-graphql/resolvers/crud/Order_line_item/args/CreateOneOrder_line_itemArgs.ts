import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemCreateInput } from "../../../inputs/Order_line_itemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => Order_line_itemCreateInput, {
    nullable: false
  })
  data!: Order_line_itemCreateInput;
}
