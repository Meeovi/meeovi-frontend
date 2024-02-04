import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutCartInput } from "../inputs/Payment_methodCreateOrConnectWithoutCartInput";
import { Payment_methodCreateWithoutCartInput } from "../inputs/Payment_methodCreateWithoutCartInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedOneWithoutCartInput", {})
export class Payment_methodCreateNestedOneWithoutCartInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCartInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;
}
