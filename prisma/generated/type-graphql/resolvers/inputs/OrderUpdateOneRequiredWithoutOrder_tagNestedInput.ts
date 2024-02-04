import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_tagInput } from "../inputs/OrderCreateOrConnectWithoutOrder_tagInput";
import { OrderCreateWithoutOrder_tagInput } from "../inputs/OrderCreateWithoutOrder_tagInput";
import { OrderUpdateToOneWithWhereWithoutOrder_tagInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrder_tagInput";
import { OrderUpsertWithoutOrder_tagInput } from "../inputs/OrderUpsertWithoutOrder_tagInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrder_tagNestedInput", {})
export class OrderUpdateOneRequiredWithoutOrder_tagNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_tagInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_tagInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_tagInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_tagInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrder_tagInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrder_tagInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrder_tagInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutOrder_tagInput | undefined;
}
