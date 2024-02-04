import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_customerInput } from "../inputs/OrderCreateOrConnectWithoutOrder_customerInput";
import { OrderCreateWithoutOrder_customerInput } from "../inputs/OrderCreateWithoutOrder_customerInput";
import { OrderUpdateToOneWithWhereWithoutOrder_customerInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrder_customerInput";
import { OrderUpsertWithoutOrder_customerInput } from "../inputs/OrderUpsertWithoutOrder_customerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrder_customerNestedInput", {})
export class OrderUpdateOneRequiredWithoutOrder_customerNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_customerInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_customerInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrder_customerInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrder_customerInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutOrder_customerInput | undefined;
}
