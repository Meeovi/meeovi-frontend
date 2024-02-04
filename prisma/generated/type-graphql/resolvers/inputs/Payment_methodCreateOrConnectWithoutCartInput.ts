import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutCartInput } from "../inputs/Payment_methodCreateWithoutCartInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutCartInput", {})
export class Payment_methodCreateOrConnectWithoutCartInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCartInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutCartInput;
}
