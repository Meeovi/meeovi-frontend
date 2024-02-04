import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodUpdateWithoutPluginInput } from "../inputs/Payment_methodUpdateWithoutPluginInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateWithWhereUniqueWithoutPluginInput", {})
export class Payment_methodUpdateWithWhereUniqueWithoutPluginInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutPluginInput, {
    nullable: false
  })
  data!: Payment_methodUpdateWithoutPluginInput;
}
