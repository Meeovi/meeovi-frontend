import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadCreateInput } from "../../../inputs/Order_line_item_downloadCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateInput, {
    nullable: false
  })
  data!: Order_line_item_downloadCreateInput;
}
