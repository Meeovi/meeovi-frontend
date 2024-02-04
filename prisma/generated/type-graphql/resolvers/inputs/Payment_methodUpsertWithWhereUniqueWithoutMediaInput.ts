import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutMediaInput } from "../inputs/Payment_methodCreateWithoutMediaInput";
import { Payment_methodUpdateWithoutMediaInput } from "../inputs/Payment_methodUpdateWithoutMediaInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithWhereUniqueWithoutMediaInput", {})
export class Payment_methodUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutMediaInput;
}
