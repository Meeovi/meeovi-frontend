import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutPluginInput } from "../inputs/Payment_methodCreateWithoutPluginInput";
import { Payment_methodUpdateWithoutPluginInput } from "../inputs/Payment_methodUpdateWithoutPluginInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithWhereUniqueWithoutPluginInput", {})
export class Payment_methodUpsertWithWhereUniqueWithoutPluginInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutPluginInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutPluginInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutPluginInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutPluginInput;
}
