import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput";
import { Order_deliveryCreateWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryCreateWithoutOrder_delivery_positionInput";
import { Order_deliveryUpdateToOneWithWhereWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryUpdateToOneWithWhereWithoutOrder_delivery_positionInput";
import { Order_deliveryUpsertWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryUpsertWithoutOrder_delivery_positionInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpdateOneRequiredWithoutOrder_delivery_positionNestedInput", {})
export class Order_deliveryUpdateOneRequiredWithoutOrder_delivery_positionNestedInput {
  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryUpsertWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  upsert?: Order_deliveryUpsertWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateToOneWithWhereWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  update?: Order_deliveryUpdateToOneWithWhereWithoutOrder_delivery_positionInput | undefined;
}
