import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadWhereInput } from "../../../inputs/Order_line_item_downloadWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  where?: Order_line_item_downloadWhereInput | undefined;
}
