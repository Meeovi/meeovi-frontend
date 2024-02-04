import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope";
import { Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput";
import { Order_line_item_downloadCreateWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadCreateWithoutOrder_line_itemInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadCreateNestedManyWithoutOrder_line_itemInput", {})
export class Order_line_item_downloadCreateNestedManyWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_line_item_downloadCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_item_downloadWhereUniqueInput[] | undefined;
}
