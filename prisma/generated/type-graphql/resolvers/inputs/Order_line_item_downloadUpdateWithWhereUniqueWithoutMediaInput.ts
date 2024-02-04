import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadUpdateWithoutMediaInput } from "../inputs/Order_line_item_downloadUpdateWithoutMediaInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadUpdateWithWhereUniqueWithoutMediaInput", {})
export class Order_line_item_downloadUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_item_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Order_line_item_downloadUpdateWithoutMediaInput;
}
