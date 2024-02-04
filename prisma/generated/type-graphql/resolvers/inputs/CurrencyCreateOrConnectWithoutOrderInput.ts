import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutOrderInput } from "../inputs/CurrencyCreateWithoutOrderInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutOrderInput", {})
export class CurrencyCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutOrderInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutOrderInput;
}
