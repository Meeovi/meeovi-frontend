import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_deliveryInput } from "../inputs/OrderCreateOrConnectWithoutOrder_deliveryInput";
import { OrderCreateWithoutOrder_deliveryInput } from "../inputs/OrderCreateWithoutOrder_deliveryInput";
import { OrderUpdateToOneWithWhereWithoutOrder_deliveryInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrder_deliveryInput";
import { OrderUpsertWithoutOrder_deliveryInput } from "../inputs/OrderUpsertWithoutOrder_deliveryInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrder_deliveryNestedInput", {})
export class OrderUpdateOneRequiredWithoutOrder_deliveryNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_deliveryInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_deliveryInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrder_deliveryInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrder_deliveryInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutOrder_deliveryInput | undefined;
}
