import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemWhereInput } from "../../../inputs/Order_line_itemWhereInput";

@TypeGraphQL.ArgsType()
export class Order_line_itemOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  where?: Order_line_itemWhereInput | undefined;
}
