import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutCartInput } from "../inputs/Payment_methodCreateWithoutCartInput";
import { Payment_methodUpdateWithoutCartInput } from "../inputs/Payment_methodUpdateWithoutCartInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithoutCartInput", {})
export class Payment_methodUpsertWithoutCartInput {
  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutCartInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutCartInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCartInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutCartInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}
