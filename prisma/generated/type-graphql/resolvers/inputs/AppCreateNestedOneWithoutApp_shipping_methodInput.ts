import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_shipping_methodInput } from "../inputs/AppCreateOrConnectWithoutApp_shipping_methodInput";
import { AppCreateWithoutApp_shipping_methodInput } from "../inputs/AppCreateWithoutApp_shipping_methodInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutApp_shipping_methodInput", {})
export class AppCreateNestedOneWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_shipping_methodInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_shipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
