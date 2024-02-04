import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_addressInput } from "../inputs/OrderCreateOrConnectWithoutOrder_addressInput";
import { OrderCreateWithoutOrder_addressInput } from "../inputs/OrderCreateWithoutOrder_addressInput";
import { OrderUpdateToOneWithWhereWithoutOrder_addressInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrder_addressInput";
import { OrderUpsertWithoutOrder_addressInput } from "../inputs/OrderUpsertWithoutOrder_addressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrder_addressNestedInput", {})
export class OrderUpdateOneRequiredWithoutOrder_addressNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_addressInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_addressInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrder_addressInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrder_addressInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutOrder_addressInput | undefined;
}
