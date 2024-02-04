import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemWhereUniqueInput } from "../../../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;
}
