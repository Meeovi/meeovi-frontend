import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateWithoutMediaInput } from "../inputs/Order_line_item_downloadCreateWithoutMediaInput";
import { Order_line_item_downloadUpdateWithoutMediaInput } from "../inputs/Order_line_item_downloadUpdateWithoutMediaInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadUpsertWithWhereUniqueWithoutMediaInput", {})
export class Order_line_item_downloadUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_item_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Order_line_item_downloadUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Order_line_item_downloadCreateWithoutMediaInput;
}
