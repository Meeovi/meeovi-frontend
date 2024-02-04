import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutCartInput } from "../inputs/CurrencyCreateWithoutCartInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutCartInput", {})
export class CurrencyCreateOrConnectWithoutCartInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCartInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutCartInput;
}
