import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateOrConnectWithoutPayment_methodInput } from "../inputs/PluginCreateOrConnectWithoutPayment_methodInput";
import { PluginCreateWithoutPayment_methodInput } from "../inputs/PluginCreateWithoutPayment_methodInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginCreateNestedOneWithoutPayment_methodInput", {})
export class PluginCreateNestedOneWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => PluginCreateWithoutPayment_methodInput, {
    nullable: true
  })
  create?: PluginCreateWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateOrConnectWithoutPayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: PluginCreateOrConnectWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  connect?: PluginWhereUniqueInput | undefined;
}
