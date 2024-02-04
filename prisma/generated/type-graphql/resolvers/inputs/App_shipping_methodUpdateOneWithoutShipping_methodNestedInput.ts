import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateOrConnectWithoutShipping_methodInput } from "../inputs/App_shipping_methodCreateOrConnectWithoutShipping_methodInput";
import { App_shipping_methodCreateWithoutShipping_methodInput } from "../inputs/App_shipping_methodCreateWithoutShipping_methodInput";
import { App_shipping_methodUpdateToOneWithWhereWithoutShipping_methodInput } from "../inputs/App_shipping_methodUpdateToOneWithWhereWithoutShipping_methodInput";
import { App_shipping_methodUpsertWithoutShipping_methodInput } from "../inputs/App_shipping_methodUpsertWithoutShipping_methodInput";
import { App_shipping_methodWhereInput } from "../inputs/App_shipping_methodWhereInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateOneWithoutShipping_methodNestedInput", {})
export class App_shipping_methodUpdateOneWithoutShipping_methodNestedInput {
  @TypeGraphQL.Field(_type => App_shipping_methodCreateWithoutShipping_methodInput, {
    nullable: true
  })
  create?: App_shipping_methodCreateWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateOrConnectWithoutShipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: App_shipping_methodCreateOrConnectWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodUpsertWithoutShipping_methodInput, {
    nullable: true
  })
  upsert?: App_shipping_methodUpsertWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  disconnect?: App_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  delete?: App_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: App_shipping_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodUpdateToOneWithWhereWithoutShipping_methodInput, {
    nullable: true
  })
  update?: App_shipping_methodUpdateToOneWithWhereWithoutShipping_methodInput | undefined;
}
