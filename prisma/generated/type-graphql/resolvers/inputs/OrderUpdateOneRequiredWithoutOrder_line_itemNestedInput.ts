import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/OrderCreateOrConnectWithoutOrder_line_itemInput";
import { OrderCreateWithoutOrder_line_itemInput } from "../inputs/OrderCreateWithoutOrder_line_itemInput";
import { OrderUpdateToOneWithWhereWithoutOrder_line_itemInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrder_line_itemInput";
import { OrderUpsertWithoutOrder_line_itemInput } from "../inputs/OrderUpsertWithoutOrder_line_itemInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrder_line_itemNestedInput", {})
export class OrderUpdateOneRequiredWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_line_itemInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrder_line_itemInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrder_line_itemInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutOrder_line_itemInput | undefined;
}
