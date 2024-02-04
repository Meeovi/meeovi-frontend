import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateWithoutPayment_methodInput } from "../inputs/PluginCreateWithoutPayment_methodInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginCreateOrConnectWithoutPayment_methodInput", {})
export class PluginCreateOrConnectWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: false
  })
  where!: PluginWhereUniqueInput;

  @TypeGraphQL.Field(_type => PluginCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: PluginCreateWithoutPayment_methodInput;
}
