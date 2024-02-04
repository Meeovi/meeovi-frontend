import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemCreateManyInput } from "../../../inputs/Order_line_itemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateManyInput], {
    nullable: false
  })
  data!: Order_line_itemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
