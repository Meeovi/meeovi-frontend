import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadWhereUniqueInput } from "../../../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_item_downloadWhereUniqueInput;
}
