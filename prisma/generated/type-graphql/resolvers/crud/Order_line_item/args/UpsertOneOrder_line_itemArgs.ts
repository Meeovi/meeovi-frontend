import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemCreateInput } from "../../../inputs/Order_line_itemCreateInput";
import { Order_line_itemUpdateInput } from "../../../inputs/Order_line_itemUpdateInput";
import { Order_line_itemWhereUniqueInput } from "../../../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateInput, {
    nullable: false
  })
  create!: Order_line_itemCreateInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateInput;
}
