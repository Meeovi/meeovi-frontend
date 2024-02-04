import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadCreateManyInput } from "../../../inputs/Order_line_item_downloadCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateManyInput], {
    nullable: false
  })
  data!: Order_line_item_downloadCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
